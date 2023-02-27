// Responsive Menu.
let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');
const pages = document.querySelector('.pages');


hamburger.addEventListener('click', () => {
  togglePagesMenu();
});

function togglePagesMenu() {

  nav.classList.toggle('responsive');

  if (pages.style.display === 'block') {
    pages.style.display = 'none'; // Show if it's hidden.
  } else  {
    pages.style.display = 'block'; // Hide if it's shown.
  }

}

// Actual date
function getCurrentDate() {
  var currentDate = new Date();
  var day = currentDate.getDay();
  var dayNum = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();

  var days = ["Sunday","Monday","Tuesday","🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.","Thursday","Friday","Saturday"];
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  var dateString = days[day] + ", " + dayNum + " " + months[month] + " " + year;

  document.getElementById("get_date").innerHTML = dateString;
}

// Getting weather data and show them:
async function getWeather() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=d1bf7498feb4f8b222047310ce70549e&units=metric&id=3529982");
  const data = await response.json();
  return data;
}

async function displayWeather() {
  const weatherData = await getWeather();

  document.getElementById("weather-temp").innerHTML = weatherData.main.temp;
  document.getElementById("wind-speed").innerHTML = weatherData.wind.speed;
  document.getElementById("weather-desc").innerHTML = weatherData.weather[0].description;
}

// Functions to initialize the page:
function initializePage() {
  // Actual year in footer.
  document.getElementById("year").innerHTML = new Date().getFullYear();

  // Last modification in footer:
  document.getElementById("date2").innerHTML = " " + document.lastModified;

  // Showing actual date in header:
  getCurrentDate();

  // Showing weather data:
  displayWeather();
}

// Initialize page when it's completely loaded:
window.onload = initializePage;
