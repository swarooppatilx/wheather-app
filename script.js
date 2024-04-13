function getWeather() {
    const pincode = document.getElementById('pincodeInput').value;
    const apiKey = '513ac8debfc21bad0d5e19eb15a4c8c3';
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${pincode}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const moisture = data.main.pressure;

            document.getElementById('temperature').textContent = temperature;
            document.getElementById('humidity').textContent = humidity;
            document.getElementById('moisture').textContent = moisture;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
