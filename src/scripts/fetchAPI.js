export async function fetchAPI() {
  const url = "/.netlify/functions/contentful-fetch.js";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    // Update your UI with the fetched data
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
