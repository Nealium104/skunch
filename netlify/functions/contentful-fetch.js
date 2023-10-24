const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_API_KEY,
  accessToken: process.env.CONTENTFUL_DELIVERY_API,
});

exports.handler = async () => {
  try {
    const entries = await client.getEntry();
    return {
      statusCode: 200,
      body: JSON.stringify(entries.items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
