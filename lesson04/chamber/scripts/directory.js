// Obtener los elementos HTML necesarios
const directory = document.getElementById("directory");
const cards = document.querySelector(".cards");
const gridBtn = document.getElementById("grid");
const listBtn = document.getElementById("list");

fetch("https://raw.githubusercontent.com/omarlaneor/wwd230/main/lesson04/chamber/data/data.json")
  .then(response => response.json())
  .then(data => {
    
    for (const company of data.companies) {
      const div = document.createElement("div");
      div.className = "card";
      const img = document.createElement("img");
      img.src = company.img;
      img.alt = company.name;
      const name = document.createElement("h4");
      name.textContent = company.name;
      const address = document.createElement("p");
      address.textContent = company.address;
      const phone = document.createElement("p");
      phone.textContent = company.phone;
      const url = document.createElement("a");
      url.href = company.url;
      url.textContent = company.url;
      div.append(img, name, address, phone, url);
      cards.appendChild(div);
    }
  })
  .catch(error => console.error(error));


gridBtn.addEventListener("click", () => {
  cards.classList.remove("list");
  cards.querySelectorAll(".card").forEach(card => {
    card.classList.remove("list");
  });
});

listBtn.addEventListener("click", () => {
  cards.classList.add("list");
  cards.querySelectorAll(".card").forEach(card => {
    card.classList.add("list");
  });
});
