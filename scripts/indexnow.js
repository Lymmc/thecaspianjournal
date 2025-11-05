const fetch = require("node-fetch");

const payload = {
  host: "www.thecaspianjournal.com",
  key: "888208ea05444a94b4a9852b30eae307",
  keyLocation: "https://www.thecaspianjournal.com/888208ea05444a94b4a9852b30eae307.txt",
  urlList: [
    "https://www.thecaspianjournal.com/index.html"
  ]
};

fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
})
  .then(res => res.text())
  .then(console.log)
  .catch(console.error);
