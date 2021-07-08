// (*) Create a server using http module. Check out the test cases for details

const http = require('http');

const server = () => {
  const httpServer = http.createServer((req, res) => {
    const body = 'Pesto Bootcamp!\n';
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'text/plain',
    });
    res.write(body);
    res.end();
  });

  return httpServer;
};

module.exports = server();
