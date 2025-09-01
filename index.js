function convertToCelsius(fahrenheitTemp) {
  return ((fahrenheitTemp - 32) * 5) / 9;
}

function describeTemperature(fahrenheitTemp) {
  let temperature = convertToCelsius(fahrenheitTemp);

  if (temperature < 0) {
    return "very cold";
  } else if (temperature >= 0 && temperature < 20) {
    return "cold";
  } else if (temperature >= 20 && temperature < 30) {
    return "warm";
  } else if (temperature >= 30 && temperature < 40) {
    return "hot";
  }
  // temperature >= 40
  else {
    return "very hot";
  }
}

let userInput = prompt("Enter a temperature in Fahrenheit:");
let fahrenheitTemp = parseFloat(userInput);

alert(
  "temperature in celsius: " +
    convertToCelsius(fahrenheitTemp) +
    " and is " +
    describeTemperature(fahrenheitTemp)
);
