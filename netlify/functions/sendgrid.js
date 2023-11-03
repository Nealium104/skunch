const sgMail = require("@sendgrid/mail");

exports.handler = async (request, context) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "neal.powers@outlook.com",
    from: "neal.grindstaff@gmail.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};
