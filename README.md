# is-internet-available

Checks if internet is available using http2, node v8.4.0+ only

## description

A simple function that returns a promise that resolves to true or false depending on if the internet is available.
this package relies on www.google.com being available and certificate stores not be broken because it uses http2 connection for the test.

## usage

First add package to project:

```bash
npm install is-internet-available
# or
yarn add is-internet-available
```

Then use it:

```js
const isInternetAvailable = require('is-internet-available');

isInternetAvailable().then(console.log);
```
