import { client } from "./contentful";

exports.handler = async () => {
  try {
    const entries = await client.getEntries();
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
  console.log(entries);
};
