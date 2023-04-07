// Actual date:
var currentDate = new Date();

// Actual year:
var currentYear = currentDate.getFullYear();

// Last modification date:
var lastModified = new Date(document.lastModified);

var lastModifiedDate = lastModified.toLocaleDateString() + " " + lastModified.toLocaleTimeString();

document.getElementById("year").innerHTML = currentYear;
document.getElementById("date2").innerHTML = lastModifiedDate;
