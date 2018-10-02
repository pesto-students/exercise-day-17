// (*) Create a server using http module. Check out the test cases for details

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Pesto Bootcamp!\n');
});

module.exports = server;
