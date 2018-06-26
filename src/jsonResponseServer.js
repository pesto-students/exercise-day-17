/* (*)
  Create a server using the http module. Respond with Content-Type = application/json
*/

const http = require('http');

const server = http.createServer((req, res) => {
  res.write(JSON.stringify({ data: 'Pesto Bootcamp!' }));
  res.end();
});

module.exports = server;
