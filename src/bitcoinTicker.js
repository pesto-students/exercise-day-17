/* (*)
  Make a get request to crypto price ticker api and show the top 10 ranked
  currencies.

  You can use this api: https://api.coinmarketcap.com/v2/ticker/
*/
const https = require('https');

const API = 'https://api.coinmarketcap.com/v2/ticker/';

module.exports = () => new Promise((resolve) => {
  https.get(API, (res) => {
    res.setEncoding('utf-8');

    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
    });
    res.on('end', () => resolve(JSON.parse(rawData)));
  });
});
