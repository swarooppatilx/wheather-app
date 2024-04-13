function getWeather() {
    const pincode = document.getElementById('pincodeInput').value;
    const apiKey = '513ac8debfc21bad0d5e19eb15a4c8c3';
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},in&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;

            document.getElementById('cityName').textContent = `City: ${cityName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('pressure').textContent = `Pressure: ${pressure} hPa`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
