"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = __importDefault(require("stripe"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const stripeSecret = process.env.STRIPE_SECRET;
if (!stripeSecret) {
    throw new Error('Stripe secret key is not defined');
}
const stripe = new stripe_1.default(stripeSecret, {
    apiVersion: '2024-12-18.acacia',
});
exports.default = stripe;
