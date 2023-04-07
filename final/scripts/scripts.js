const apiKey = "bdb1b19748308daf15192f6310a6eead";
const city = "Carlsbad";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}&units=metric&cnt=3`;

const temperatureElem = document.querySelector('.temperature');
const conditionElem = document.querySelector('.condition');
const humidityElem = document.querySelector('.humidity');
const forecastElem = document.querySelector('.forecast');

// Get actual info
fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    temperatureElem.textContent = `${data.main.temp}°C`;
    conditionElem.textContent = data.weather[0].description;
    humidityElem.textContent = `${data.main.humidity}%`;
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Get 3-day temperature forecast
fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    data.list.forEach((day, index) => {
      const dayElem = document.createElement('div');
      dayElem.classList.add('day');
      const dateElem = document.createElement('p');
      dateElem.classList.add('date');
      const tempElem = document.createElement('p');
      tempElem.classList.add('temp');
      const conditionElem = document.createElement('p');
      conditionElem.classList.add('condition');
      dateElem.textContent = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      tempElem.textContent = `${day.temp.min.toFixed(1)}°C - ${day.temp.max.toFixed(1)}°C`;
      conditionElem.textContent = day.weather[0].description;
      dayElem.appendChild(dateElem);
      dayElem.appendChild(tempElem);
      dayElem.appendChild(conditionElem);
      forecastElem.appendChild(dayElem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
