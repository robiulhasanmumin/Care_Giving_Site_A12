import nodemailer from "nodemailer";

export const sendInvoiceEmail = async (bookingInfo) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Care.People" <${process.env.EMAIL_USER}>`,
    to: bookingInfo.userEmail,
    subject: `Booking Confirmation - ${bookingInfo.serviceName}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
        <h1 style="text-align: center">Care<span style="color: blue; text-align: center">.People</span></h1>
        <h3 style="color: #4A00FF; text-align: center;">Booking Invoice</h3>
        <p>Hi <strong>${bookingInfo.userName}</strong>,</p>
        <p>Thank you for choosing our service! Your booking is currently <strong>Pending</strong>. Here are the details:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background: #f4f4f4;">
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Service</th>
            <td style="padding: 10px; border: 1px solid #ddd;">${bookingInfo.serviceName}</td>
          </tr>
          <tr>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Duration</th>
            <td style="padding: 10px; border: 1px solid #ddd;">${bookingInfo.duration} Days</td>
          </tr>
          <tr style="background: #f4f4f4;">
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Total Cost</th>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: blue;">$${bookingInfo.totalCost}</td>
          </tr>
          <tr>
            <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Location</th>
            <td style="padding: 10px; border: 1px solid #ddd;">${bookingInfo.location.address}, ${bookingInfo.location.district}, ${bookingInfo.location.division}</td>
          </tr>
        </table>

        <p style="text-align: center; font-size: 12px; color: #777;">This is an automated invoice. No payment is required right now.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Invoice Email Sent!");
  } catch (error) {
    console.error("Email Error:", error);
  }
};