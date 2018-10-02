/* (*)
  Make a get request to crypto price ticker api and show the top 10 ranked
  currencies.

  You can use this api: https://api.coinmarketcap.com/v2/ticker/
*/
const http = require('http');

module.exports = (constraint) => {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    http.get('http://nodejs.org/dist/index.json', (resp) => {
      let rawData = '';
      resp.on('data', (chunk) => { rawData += chunk; });
      resp.on('end', () => {
        const parsedData = JSON.parse(rawData);
        const x = Object.values(parsedData.data);
        const mainArr = [];
        for (let i = 0; i < constraint.limit; i += 1) {
          mainArr.push(x[i].name);
        }
        return mainArr;
      });
    });
  });
  server.listen(3000);
};
