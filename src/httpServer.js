// (*) Create a server using http module. Check out the test cases for details

const http = require('http');

const server = http.createServer((request, response) => {
  response.write('Response from server!');
  response.end();
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

module.exports = server;
