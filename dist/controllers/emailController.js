"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// Configure the SMTP transporter
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail', // You can change this to any email service
    auth: {
        user: 'mel@dev.vto.group', // Replace with your email
        pass: 'Turbito@360', // Replace with your email password or app-specific password
    },
});
const sendEmail = (paymentDetails, courseDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: 'your-email@gmail.com', // Sender address
        to: 'admin-email@example.com', // Receiver address (Admin's email)
        subject: 'New Payment Received', // Subject line
        html: `
      <h1>New Payment Received</h1>
      <p><strong>Payment Details:</strong></p>
      <ul>
        <li>Amount: $${paymentDetails.amount / 100}</li>
        <li>Currency: ${paymentDetails.currency}</li>
        <li>Payment Method: ${paymentDetails.payment_method}</li>
        <li>Payment Status: ${paymentDetails.status}</li>
      </ul>
      <p><strong>Course Details:</strong></p>
      <ul>
        <li>Course Name: ${courseDetails.name}</li>
        <li>Course Price: $${courseDetails.price}</li>
        <li>Course Description: ${courseDetails.description}</li>
      </ul>
    `,
    };
    try {
        yield transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
});
exports.sendEmail = sendEmail;
