async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'fcb78f28fb444168b54215039243110';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        const weatherResult = document.getElementById("weatherResult");
        weatherResult.innerHTML = `
            <div class="weather-info"><strong>City:</strong> ${data.location.name}</div>
            <div class="weather-info"><strong>Temperature:</strong> ${data.current.temp_c}°C</div>
            <div class="weather-info"><strong>Weather:</strong> ${data.current.condition.text}</div>
            <div class="weather-info"><strong>Humidity:</strong> ${data.current.humidity}%</div>
            <div class="weather-info"><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</div>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<div style="color: red;">${error.message}</div>`;
    }
}

document.getElementById("searchBtn").addEventListener("click", getWeather);
