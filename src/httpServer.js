// (*) Create a server using http module. Check out the test cases for details

const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });

  // response.write();
  const responseMessage = 'Pesto Bootcamp!\n';
  response.end(responseMessage);
});

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is listening on port: ${port}`);
// });

module.exports = server;
