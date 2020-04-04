module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    "airbnb-base"
  ],
  plugins: ["prettier"],
  rules: {
    "class-methods-use-this": "off",
    "no-plusplus": "off",
    "no-param-reassign": 'off'
  }
};