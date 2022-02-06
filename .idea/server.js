var http = require("http");
var server = http.createServer();
server.on("request", (req, res) => {
    var body = [];
    req.on("data", chunk => {
        body.push(chunk);
    });
    req.on("end", () => {
        let bodyString = body.concat().toString();
        console.log(bodyString);
        res.end(bodyString);
    });
    req.on("error", () => {
        res.statusCode = 400;
        res.end();
    });
    res.on("error", err => {
        res.statusCode = 500;
        console.err(err);
    });
});
server.listen(process.env.PORT, () => {
    console.log("Server listening");
});

module.exports = server;
