const nodemailer = require("nodemailer");
const router = require("express").Router();
var smtpTransport = require('nodemailer-smtp-transport');


router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

   const transporter = nodemailer.createTransport(  smtpTransport( {
 service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_EMAIL_PASS,
  },
}));


    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: email, 
      subject: "Thank You for Getting in Touch!", 
      text: `Thank you for reaching out to us at Golden Reserve Hub. We appreciate your interest in our platform and your decision to invest for the future in a stable and secure manner.Your message has been received, and we'll make sure to get back to you as soon as possible. Our team is dedicated to providing you with the information and guidance you need to make informed investment decisions. In the meantime, we want to emphasize the importance of responsible and secure bullion storage, as mentioned in our website's content. Your investments are valuable, and we're here to help you safeguard them effectively. If you have any specific questions or concerns, please don't hesitate to ask. We're here to assist you every step of the way on your investment journey.
      
    Thank you once again for considering Golden Reserve Hub as your trusted partner in achieving your financial goals.
      
    Best regards
    Golden Reserve Hub`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent successfully");
      }
    });

    res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while processing the subscription" });
  }
});

module.exports = router;
