/* (*)
  Make a get request to crypto price ticker api and show the top 10 ranked
  currencies.

  You can use this api: https://api.coinmarketcap.com/v2/ticker/
*/
// const http = require('http');
const fetch = require('node-fetch');

function bitcoinTicker(object) {
  return fetch('https://api.coinmarketcap.com/v2/ticker/')
    .then(res => res.json())
    .then(res => res.data)
    .then(data => Object.values(data))
    .then((arr) => {
      arr.filter(obj => obj.rank <= object.limit)
        .map(obj => console.log(obj.name));
    });
}

module.exports = bitcoinTicker;
