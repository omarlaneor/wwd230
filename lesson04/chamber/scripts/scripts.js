document.getElementById("year").innerHTML = new Date().getFullYear()
document.getElementById("date2").innerHTML = " "+document.lastModified

let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');

});

function myFunction() {
    var x = document.getElementById("myPages");
    if (x.className === "pages") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


var currentDate = new Date();
var day = currentDate.getDay();
var dayNum = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var days = ["Sunday","Monday","Tuesday","🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var dateString = days[day] + ", " + dayNum + " " + months[month] + " " + year;

document.getElementById("get_date").innerHTML = dateString;


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

displayWeather()
