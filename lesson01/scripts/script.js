const year = document.querySelector('#year');

year.textContent = `${new Date().getFullYear()}`;

function lastUpdated() {
    let a = document.lastModified;
    document.getElementById("lastmodified").innerHTML = a;
}

var f = new Date();
        document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);