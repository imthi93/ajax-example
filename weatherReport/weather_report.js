function showweatherDetails(event) {
      event.preventDefault();
       const city = document.getElementById('city').value;
      const apiKey = 'f1053c81e270169fcb9004d16b79b589'
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&id&appid=${apiKey}&units=metric`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            console.log(data);
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}