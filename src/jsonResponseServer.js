/* (*)
  Create a server using the http module. Respond with Content-Type = application/json
*/

const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'application/json',
  });

  // response.write();
  const responseMessage = {
    data: 'Pesto Bootcamp!',
  };
  response.write(JSON.stringify(responseMessage));
  response.end();
});

module.exports = server;
