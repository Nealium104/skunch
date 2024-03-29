const sgMail = require("@sendgrid/mail");

exports.handler = async (event, context) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const formData = new URLSearchParams(event.body);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const msg = {
    to: "contactskunch@gmail.com",
    from: "neal.grindstaff@gmail.com",
    subject: subject,
    text: message,
    html: `From:${name} at ${email} <strong>${message}</strong>`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error sending email",
        error: error.message,
      }),
    };
  }
};
