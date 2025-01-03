import nodemailer from 'nodemailer';

// Configure the SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to any email service
  auth: {
    user: 'mel@dev.vto.group', // Replace with your email
    pass: 'Turbito@360', // Replace with your email password or app-specific password
  },
});

export const sendEmail = async (paymentDetails: any, courseDetails: any) => {
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
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
