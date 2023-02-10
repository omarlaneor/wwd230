
const temperature = 71 
const speed = 1.48

if (temperature <= 50 && speed > 3.0 ) {

  document.getElementById("wind-chill").innerHTML = (35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16));
} else {
  document.getElementById("wind-chill").innerHTML = ("N/A");
}
