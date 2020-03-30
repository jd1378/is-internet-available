const http2 = require('http2');

module.exports = function isInternetAvailable() {
  return new Promise((resolve) => {
    const client = http2.connect('https://www.google.com');
    client.on('connect', () => {
      resolve(true);
      client.destroy();
    });
    client.on('error', () => {
      resolve(false);
      client.destroy();
    });
  });
};
