const assert = require('assert');
const { fahrenheitToCelsius, celsiusToFahrenheit } = require('./index');

assert.strictEqual(fahrenheitToCelsius(32), 0, '32 Fahrenheit should equal to 0 Celsius');
assert.strictEqual(fahrenheitToCelsius(212), 100, '212 Fahrenheit should equal to 100 Celsius');

assert.strictEqual(celsiusToFahrenheit(0), 32, '0 Celsius should equal to 32 Fahrenheit');
assert.strictEqual(celsiusToFahrenheit(100), 212, '100 Celsius should equal to 212 Fahrenheit');
console.log('All tests are passed');
