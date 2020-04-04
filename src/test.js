const pkg = require('./index');

// pkg.isInternetAvailable({authority: 'http://localhost'}).then(console.log)

const service = new pkg.InternetAvailabilityService({ rate: 1000 });
service.on('checking', () => console.log('checking connection'));
service.on('status', (value) => console.log('connection status changed to', value));
