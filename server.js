const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    req.url === "/" ? "/index.html" : req.url
  );

  // Get the file extension
  let ext = path.extname(filePath);

  // Default Content-Type
  let contentType = "text/html";
  if (ext === ".css") contentType = "text/css";
  if (ext === ".js" || ext === ".mjs") contentType = "text/javascript";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File not found, serve index.html
        fs.readFile(
          path.join(__dirname, "index.html"),
          (error, indexContent) => {
            if (error) {
              res.writeHead(500);
              res.end("Server Error: Could not load index.html");
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(indexContent, "utf-8");
            }
          }
        );
      } else {
        res.writeHead(500);
        res.end("Server Error");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
