/* (*)
  Make a get request to crypto price ticker api and show the top 10 ranked
  currencies.

  You can use this api: https://api.coinmarketcap.com/v2/ticker/
*/

const request = require('request');

const bitcoinTicker = ({ limit } = { limit: 10 }) =>
  new Promise((resolve, reject) => {
    request.get(`https://api.coinmarketcap.com/v2/ticker/?limit=${limit}&sort=rank`, (err, response, body) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(body));
    });
  });

// (async () => {
//   const response = await bitcoinTicker({
//     limit: 10,
//   });
//   console.log(response);
// })();

module.exports = bitcoinTicker;
