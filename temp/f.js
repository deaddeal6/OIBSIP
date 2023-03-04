function convertTemperature() {
	const temperatureInput = document.getElementById("temperatureInput").value;
	const temperatureType = document.getElementById("temperatureType").value;
	
	// Check if temperature input is a number
	if (isNaN(temperatureInput)) {
		alert("Please enter a valid temperature.");
		return;
	}
	
	let convertedTemperature;
	let convertedUnit;
	
	if (temperatureType === "celsius") {
		convertedTemperature = (temperatureInput * 1.8) + 32;
		convertedUnit = "Fahrenheit";
	} else if (temperatureType === "fahrenheit") {
		convertedTemperature = (temperatureInput - 32) / 1.8;
		convertedUnit = "Celsius";
	} else if (temperatureType === "kelvin") {
		convertedTemperature = parseFloat(temperatureInput) - 273.15;
		convertedUnit = "Celsius";
	}
	
	document.getElementById("convertedTemperature").innerHTML = convertedTemperature + " " + convertedUnit;
}
