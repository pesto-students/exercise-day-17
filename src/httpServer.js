// (*) Create a server using http module. Check out the test cases for details

const http = require('http');

const server = () => {
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    if (req.url === '/') {
      res.write('Pesto Bootcamp!');
    }
    res.end();
  });
  server.listen(3000);
};

module.exports = server;
