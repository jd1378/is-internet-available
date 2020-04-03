# is-internet-available

Checks if internet is available using http2, node v8.4.0+ only

## description

By default this package relies on www.google.com being available and certificate stores not be broken because it uses http2 connection for the test.

You can use any other URL for the test

It has two exports:

### function `isInternetAvailable` (testUrl?: '<https://www.google.com>')

* returns a Promise that resolves to true or false

### class `InternetAvailabilityService` (rate?: number [10 * 1000 ms], testUrl?: '<https://www.google.com>' )

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

Since v2.1.0 you can also use against a custom URL:

```js
const { isInternetAvailable, InternetAvailabilityService } = require('is-internet-available');

isInternetAvailable("http://localhost").then(console.log);
// or
const service = new InternetAvailabilityService(1000, "http://localhost");
service.on('status', (status) => {
  if (status) {
    console.log('localhost is now available');
  } else {
    console.log('localhost is now unavailable');
  }
});

```

## changelog

### version 2.1.1

* updated package.json keywords to help find it easier

### version 2.1.0

Features:

* Can use custom url for testing instead of google

### version 2.0.0

Features:

* added service.

breaking changes:

* no longer exports the function by default
  