document.getElementById("year").innerHTML = new Date().getFullYear()
document.getElementById("date2").innerHTML = " "+document.lastModified


function myFunction() {
    var x = document.getElementById("myPages");
    if (x.className === "pages") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const mainnav = document.querySelector('.pages')
  const hambutton = document.querySelector('#menu');

  hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);