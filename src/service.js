const isInternetAvailable = require('./function.js');
const EventEmitter = require('events').EventEmitter;

class InternetAvailabilityService extends EventEmitter {
  constructor (rate = 10 * 1000, testUrl = 'https://www.google.com'){
    super();
    this.isInternetAvailable = false;
    const checkForever = async () => {
      this.emit('checking');
      const result = await isInternetAvailable(testUrl);
      if (result !== this.isInternetAvailable) {
        this.isInternetAvailable = result;
        this.emit('status', result);
      }
      setTimeout(checkForever, rate);
    };
    setImmediate(checkForever);
  }
}

module.exports = InternetAvailabilityService;