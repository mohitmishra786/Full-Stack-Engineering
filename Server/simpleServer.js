const http = require("http");
const fs = require('fs');
const PORT = 3000;

const server = http.createServer(function (req, res) {
	res.writeHead(200, { 'content-type': 'text/html'});
	fs.createReadStream('index.html').pipe(res);
});

//  After Creating Server, we need to make it listen to PORT
server.listen(PORT);
console.log(`Server started on port ${PORT}`);

