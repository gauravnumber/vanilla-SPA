const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Get the file extension
  const ext = path.extname(req.url);

  // Handle static files (js, css, etc.)
  if (ext) {
    // Always serve static files from root directory
    const filePath = path.join(__dirname, req.url.split("/").pop());
    let contentType = "text/html";

    // Set content type based on file extension
    if (ext === ".css") contentType = "text/css";
    if (ext === ".js" || ext === ".mjs") contentType = "text/javascript";

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("File not found");
        return;
      }
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    });
  } else {
    // For all other routes, serve index.html
    fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error: Could not load index.html");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
