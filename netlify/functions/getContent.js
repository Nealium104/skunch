const contentful = require("contentful");

exports.handler = async function (event, context) {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_API_KEY,
    accessToken: process.env.CONTENT_DELIVERY_API,
  });

  try {
    const entries = await client.getEntries();
    return {
      statusCode: 200,
      body: JSON.stringify(entries.items),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server Error" }),
    };
  }
};
