const http = require("http");
const dateTime = require("./my-first-module");

http
  .createServer(function (req, res) {
    console.log(req.url); 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dateTime.myDateTime());
    res.end();
  })
  .listen(8080);
