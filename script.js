const fetch = require("node-fetch");
let quote = {};
const data = async () => {
  const got = await fetch("https://api.quotable.io/random");
  quote = await got.json();
  console.log(`"${quote.content}"-${quote.author} `);
};
data();
