// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require("@sendgrid/mail");

exports.handler = async (event, context) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "neal.powers@outlook.com", // Change to your recipient
    from: "neal.grindstaff@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent successfully" }),
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Error sending email" }),
      };
    });
};