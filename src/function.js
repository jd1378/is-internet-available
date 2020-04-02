const http2 = require('http2');

module.exports = function isInternetAvailable(testUrl='https://www.google.com') {
  return new Promise((resolve) => {
    const client = http2.connect(testUrl);
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
