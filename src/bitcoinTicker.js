const fetch = require('node-fetch');
// Don't know why import isn't working here.
/* (*)
  Make a get request to crypto price ticker api and show the top 10 ranked
  currencies.

  You can use this api: https://api.coinmarketcap.com/v2/ticker/
*/
// const http = require('https');

function bitcoinTicker() {
  // http.get('https://api.coinmarketcap.com/v2/ticker/', (res) => {
  //   let data = '';
  //   // const count = 0;
  //   res.on('data', (resp) => {
  //     data += resp;
  //   });
  //   res.on('end', () => {
  //     console.log(JSON.parse(data));
  //   });
  // });
  return fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=id')
    .then(res => res.json())
    .then(body => body);
}
// bitcoinTicker();
module.exports = bitcoinTicker;
