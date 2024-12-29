"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stripe_1 = __importDefault(require("../config/stripe"));
const router = express_1.default.Router();
router.post('/webhook', express_1.default.raw({ type: 'application/json' }), (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = ' whsec_24df5e2561b684f6e7e554f4ceb839b644f88f7421960fdb556371c78b930f65';
    try {
        const event = stripe_1.default.webhooks.constructEvent(req.body, sig, endpointSecret);
        if (event.type === 'payment_intent.succeeded') {
            const paymentIntent = event.data.object;
            console.log('PaymentIntent succeeded:', paymentIntent);
        }
        res.json({ received: true });
    }
    catch (err) {
        console.error('Webhook Error:', err.message);
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
});
exports.default = router;
