const year = document.querySelector('#year');

year.textContent = `${new Date().getFullYear()}`;

function lastUpdated() {
    let a = document.lastModified;
    document.getElementById("lastmodified").innerHTML = a;
}
