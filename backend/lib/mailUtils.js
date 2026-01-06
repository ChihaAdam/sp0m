import nodemailer from "nodemailer";
import { GMAIL_ADDRESS, GMAIL_PASSWORD } from "../config/env.js";
export const sendVerificationEmail = async (
  email,
  username,
  verificationCode
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_ADDRESS,
      pass: GMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: `Chiha adam`,
    to: email,
    subject: "Verify your email address",
    html: `
            <div style="max-width: 500px; margin: 0 auto; text-align: center; 
                        border: 1px solid #aaa; padding: 30px; 
                        border-radius: 12px; background-color: #ffffff; 
                        box-shadow: 0 4px 12px rgba(0,0,0,0.08); 
                        font-family: 'Segoe UI', Arial, sans-serif;">

            <h1 style="background: linear-gradient(90deg, #7b2ff7, #f107a3); 
                        color: transparent; -webkit-background-clip: text; 
                        background-clip: text; font-size: px; margin-bottom: 20px;">
                Verify your email address
            </h1>

            <p style="font-size: 16px; color: #444; margin-bottom: 20px;">
                Hello <strong>${username}</strong>, 
                one single step to complete your registration.
                Please enter the following code to verify your email address:
            </p>

            <div style="font-size: 24px; font-weight: bold; 
                        color: #7b2ff7; letter-spacing: 2px; 
                        background: #bbbbfa77; padding: 12px 20px; 
                        border: 1px solid #aaa;
                        border-radius: 8px; display: inline-block; 
                        margin-bottom: 25px;">
                ${verificationCode}
            </div>

            <p style="font-size: 15px; color: #555; margin: 0;">
                Best regards,
            </p>
            <p style="font-size: 15px; font-weight: bold; color: #999; margin-top: 5px;">
                Chiha Adam
            </p>
            </div>
    `,
  };
  await transporter.sendMail(mailOptions);
};
