function convertTemperature() {
    var value = document.getElementById("value").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");
    var result;
  
    if (fromUnit === toUnit) {
      resultElement.innerHTML = "Please select different units.";
      return;
    }
  
    switch (fromUnit) {
      case "celsius":
        result = convertFromCelsius(value, toUnit);
        break;
      case "fahrenheit":
        result = convertFromFahrenheit(value, toUnit);
        break;
      case "kelvin":
        result = convertFromKelvin(value, toUnit);
        break;
      case "rankine":
        result = convertFromRankine(value, toUnit);
        break;
      default:
        resultElement.innerHTML = "Invalid unit.";
        return;
    }
  
    resultElement.innerHTML = value + " " + fromUnit + " = " + result + " " + toUnit;
  }
  
  function convertFromCelsius(value, toUnit) {
    switch (toUnit) {
      case "fahrenheit":
        return (value * 9 / 5) + 32;
      case "kelvin":
        return parseFloat(value) + 273.15;
      case "rankine":
        return (parseFloat(value) + 273.15) * 9 / 5;
      default:
        return "Invalid unit.";
    }
  }
  
  function convertFromFahrenheit(value, toUnit) {
    switch (toUnit) {
      case "celsius":
        return (value - 32) * 5 / 9;
      case "kelvin":
        return (parseFloat(value) - 32) * 5 / 9 + 273.15;
      case "rankine":
        return parseFloat(value) + 459.67;
      default:
        return "Invalid unit.";
    }
  }
  
  function convertFromKelvin(value, toUnit) {
    switch (toUnit) {
      case "celsius":
        return parseFloat(value) - 273.15;
      case "fahrenheit":
        return (parseFloat(value) - 273.15) * 9 / 5 + 32;
      case "rankine":
        return parseFloat(value) * 9 / 5;
      default:
        return "Invalid unit.";
    }
  }
  
  function convertFromRankine(value, toUnit) {
    switch (toUnit) {
      case "celsius":
        return (parseFloat(value) - 491.67) * 5 / 9;
      case "fahrenheit":
        return parseFloat(value) - 459.67;
      case "kelvin":
        return parseFloat(value) * 5 / 9;
      default:
        return "Invalid unit.";
    }
  }
  