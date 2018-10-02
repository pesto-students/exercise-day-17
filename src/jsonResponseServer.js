/* (*)
  Create a server using the http module. Respond with Content-Type = application/json
*/

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ data: 'Pesto Bootcamp!' }));
});

module.exports = server;
