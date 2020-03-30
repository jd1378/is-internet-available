# is-internet-available

Checks if internet is available using http2, node v8.4.0+ only

## description

This package relies on www.google.com being available and certificate stores not be broken because it uses http2 connection for the test.

It has two exports:

### function `isInternetAvailable`

* returns a Promise that resolves to true or false

### class `InternetAvailabilityService` (rate = 10 * 1000 milliseconds)

* emits `'status'` (`true`|`false`) - (only when it changes)
* emits `'checking'` - when starting to run the check

## usage

First add package to project:

```bash
npm install is-internet-available
# or
yarn add is-internet-available
```

Then use it:

```js
const { isInternetAvailable, InternetAvailabilityService } = require('is-internet-available');

isInternetAvailable().then(console.log);
// or
const service = new InternetAvailabilityService();
service.on('status', (status) => {
  if (status) {
    console.log('internet is now connected');
  } else {
    console.log('internet is now disconnected');
  }
});
```

## changelog

### version 2.0.0

Features:

* added service.

breaking changes:

*  no longer exports the function by default