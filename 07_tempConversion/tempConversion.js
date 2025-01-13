const convertToCelsius = function(temperatureFahrenheit) {
  temperatureCelsius = (temperatureFahrenheit - 32) * (5 / 9);
  return Number(temperatureCelsius.toFixed(1));
};

const convertToFahrenheit = function(temperatureCelsius) {
  temperatureFahrenheit = (temperatureCelsius * (9 / 5)) + 32;
  return Number(temperatureFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
