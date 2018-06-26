// (*) Create a server using http module. Check out the test cases for details

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('Pesto Bootcamp!\n');
  res.end();
}).listen(3000);

module.exports = server;
