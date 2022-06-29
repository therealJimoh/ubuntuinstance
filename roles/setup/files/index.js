let http = require("http");
let server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Welcome to my web page!")
});
server.listen(3000);