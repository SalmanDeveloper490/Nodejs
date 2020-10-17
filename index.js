// Http Module
const http = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.port || 5000;

const app = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      }
    );
  } else if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      }
    );
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
