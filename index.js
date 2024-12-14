// Converts temperature from Fahrenheit to Celsius
const fahrenheitToCelsius = (fahrenheit) => {
  return (5 / 9 * (fahrenheit - 32));
};
// Converts temperature from Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => {
  return ((celsius * 9 / 5) + 32);
};
module.exports = { fahrenheitToCelsius, celsiusToFahrenheit };
