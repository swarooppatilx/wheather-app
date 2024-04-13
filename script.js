function getWeather() {
    const pincode = document.getElementById('pincodeInput').value;
    const apiKey = '513ac8debfc21bad0d5e19eb15a4c8c3';
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},in&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('City not found. Please enter a valid pincode.');
                } else {
                    throw new Error('Failed to fetch weather data. Please try again.');
                }
            }
            return response.json();
        })
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;

            document.getElementById('cityName').textContent = `City: ${cityName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('pressure').textContent = `Pressure: ${pressure} hPa`;

            const errorAlert = document.getElementById('error');
            errorAlert.textContent = ''; // Clear any previous error messages
            errorAlert.style.display = 'none'; // Hide the error alert box
        })
        .catch(error => {
            const errorAlert = document.getElementById('error');
            errorAlert.textContent = error.message;
            errorAlert.style.display = error.message ? 'block' : 'none'; // Show the error alert box only if there is an error message
            console.error('Error:', error);
        });
}
