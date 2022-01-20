var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("FOO")
    } else if (req.method === "POST") {

        setTimeout(() => {
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        console.log(body)

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("found it, yes the answer");
        });

            console.log("World!");
        }, 5000);

    }

}).listen(3001);
