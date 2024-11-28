let isCelsius = true;
let cityData = null;

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const weatherResult = document.getElementById("weatherResult");

    if (!city) {
        weatherResult.innerHTML = `<div style="color: red;">Please enter a city name</div>`;
        return;
    }

    const apiKey = 'fcb78f28fb444168b54215039243110';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    // Show the spinner
    weatherResult.innerHTML = `<div class="spinner"></div>`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        cityData = await response.json();
        console.log(cityData);

        updateWeatherDisplay();
    } catch (error) {
        weatherResult.innerHTML = `<div style="color: red; margin-block: 10px">${error.message}</div>`;
    }
}

function updateWeatherDisplay() {
    if (cityData == null) {
        return;
    }

    const temp = isCelsius ? cityData.current.temp_c : cityData.current.temp_f; // Determine the temperature
    const weatherResult = document.getElementById("weatherResult");
    weatherResult.innerHTML = `
        <div class="weather-info city-name"><strong>${cityData.location.name}</strong></div>
        
        <img src="${cityData.current.condition.icon}" alt="${cityData.current.condition.text}" class="weather-icon">
        <div class="weather-info">${cityData.current.condition.text}</div>
        
        <div class="weather-info"><strong>Temperature:</strong> ${temp}°${isCelsius ? 'C' : 'F'}</div>
        <div class="weather-info"><strong>Humidity:</strong> ${cityData.current.humidity}%</div>
        <div class="weather-info"><strong>Wind Speed:</strong> ${cityData.current.wind_kph} kph | ${cityData.current.wind_mph} mph</div>
    `;
}


// Handle temperature toggle
function toggleTemperature() {
    isCelsius = !isCelsius;
    document.getElementById("toggleTempBtn").textContent = isCelsius ? "°F" : "°C";

    updateWeatherDisplay();

    showAlert(`Temperature metric changed to ${isCelsius ? "Celsius (°C)" : "Fahrenheit (°F)"}`);
}

function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "alert-box";
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000); // Remove the alert after 3 seconds
}


// Event Listeners
document.getElementById("searchBtn").addEventListener("click", getWeather);
document.getElementById("cityInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});
document.getElementById("toggleTempBtn").addEventListener("click", toggleTemperature);
