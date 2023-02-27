// Get the actual date:
var today = new Date().getTime();

// Get last visit date stored in localStorage:
var lastVisit = localStorage.getItem('lastVisit');

// If no last visit date stored in localStorage, set current date as last visit:
if (!lastVisit) {
  localStorage.setItem('lastVisit', today);
}

// Calculate the number of days between the last visit and the current date:
var lastVisitDays = Math.round((today - lastVisit) / (1000 * 60 * 60 * 24));

// Show the number of days on the page:
document.getElementById('days').innerHTML = lastVisitDays;

// Update the last visit date in localStorage with the current date:
localStorage.setItem('lastVisit', today);
