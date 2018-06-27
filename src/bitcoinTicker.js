/* eslint-disable no-alert, no-console */
/* (*)
  Make a get request to crypto price ticker api and show the top 10 ranked
  currencies.

  You can use this api: https://api.coinmarketcap.com/v2/ticker/
*/
const fetch = require('node-fetch');

// const http = require('http');
function bitcoinTicker() {
  return fetch('https://api.coinmarketcap.com/v2/ticker/')
    .then(res => res.json())
    .then((body) => {
      const key = Object.values(body.data).filter(item => item.rank <= 10);
      return { data: key };
    });
}
module.exports = bitcoinTicker;
