/* (*)
  Create a server using the http module. Respond with Content-Type = application/json
*/

// const http = require('http');

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application: json' });
  res.write(JSON.stringify({ data: 'Pesto Bootcamp!' }));
  res.end();
}).listen(3000);

module.exports = server;
