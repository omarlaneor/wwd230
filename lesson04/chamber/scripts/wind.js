$(document).ready(function() {
  var lat = 4.538889;
  var lon = -75.6725;

  // Hace una llamada a la API de OpenWeatherMap
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=bdb1b19748308daf15192f6310a6eead", function(data) {
    // Actualiza la temperatura actual en la página
    $("#weather-temp").html(Math.round(data.main.temp));

    // Actualiza la descripción del clima en la página
    $("#weather-desc").html(data.weather[0].description);

    // Actualiza el icono del clima en la página
    var iconUrl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $("img[alt='Weather icon']").attr("src", iconUrl);

    // Actualiza la velocidad del viento en la página
    $("#wind-speed").html(Math.round(data.wind.speed));

    // Calcula la sensación térmica y actualiza la página
    var windChill = calculateWindChill(data.main.temp, data.wind.speed);
    if (windChill === "N/A") {
      $("#wind-chill").html("N/A");
    } else {
      $("#wind-chill").html(Math.round(windChill));
    }
  });

  // Función para calcular la sensación térmica
  function calculateWindChill(temperature, windSpeed) {
    if (temperature < 10 && windSpeed > 4.8) {
      var windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
      return windChill;
    } else {
      return "N/A";
    }
  }
});
