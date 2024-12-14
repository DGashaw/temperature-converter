# temperature-converter
Simple node.js API used to convert temperature from Celsius to Fahrenheit and vice versa.

# Example usage
```js
const { fahrenheitToCelsius, celsiusToFahrenheit }
 = require('@danmanutd/temperature-converter');
Publishing a module 133
const celsius = fahrenheitToCelsius(100);
console.log(`212°F is ${celsius}°C`);
const fahrenheit = celsiusToFahrenheit(37);
console.log(`0°C is ${fahrenheit}°F`);
```
# Running Tests
 To run tests and ensure the module is working as expected,
navigate to the module's root directory and execute:
```sh
$ npm run test
```
# License
This project is licensed under the MIT License.
