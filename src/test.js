const pkg = require('./index');

const service = new pkg.InternetAvailabilityService(1000, "http://localhost/");
service.on('checking', () => console.log('checking connection'));
service.on('status', (value) => console.log('connection status changed to ', value));