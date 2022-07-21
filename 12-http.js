const { equal } = require("node:assert");
const http = require("node:http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page!");
    }
    if (req.url === "/about") {
        res.end("Here is our story!");
    }
    res.end(`<h1> Ooops!</h1>
    <p>we cant find your stupid page asshole , so fuck off</p>
    <a href="/">Back home</a>`);
});

server.listen(8000);
