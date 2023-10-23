import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_API_KEY,
  accessToken: process.env.CONTENTFUL_DELIVERY_API,
  host: "cdn.contentful.com",
});
