/* (*)
  Make a get request to crypto price ticker api and show the top 10 ranked
  currencies.

  You can use this api: https://api.coinmarketcap.com/v2/ticker/
*/
// const http = require('http');
const fetch = require('node-fetch');

function ticker({ limit }) {
  return fetch('https://api.coinmarketcap.com/v2/ticker/')
    .then(res => res.json())
    .then((response) => {
      const values = Object.values(response.data);
      const top10Crypto = values.filter(crypto => crypto.rank <= limit)
        .sort((a, b) => {
          if (a.rank > b.rank) {
            return 1;
          }
          return -1;
        })
        .map(crypto => crypto.name);

      // return top10Crypto;
      return {
        data: top10Crypto,
      };
    });
}

module.exports = ticker;
