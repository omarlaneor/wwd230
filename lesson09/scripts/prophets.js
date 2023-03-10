const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        const prophets = data["prophets"]; // note that we reference the prophet array of the data object given the structure of the json file
        prophets.forEach(prophet => {
            displayProphets(prophet);
        });
    }
}

getProphetData(url);

function displayTable(prophet) {
    let tableRow = document.createElement("tr");

    let tableName = document.createElement("td");
    tableName.textContent = prophet.name + " " + prophet.lastname;
    tableRow.appendChild(tableName);

    let tableBirthdate = document.createElement("td");
    tableBirthdate.textContent = prophet.birthdate;
    tableRow.appendChild(tableBirthdate);

    let tableBirthplace = document.createElement("td");
    tableBirthplace.textContent = prophet.birthplace;
    tableRow.appendChild(tableBirthplace);

    document.querySelector("table").appendChild(tableRow);
}

function displayProphets(prophet) {
    let card = document.createElement("section");

    let h2 = document.createElement("h2");
    h2.textContent = prophet.name + " " + prophet.lastname;
    card.appendChild(h2);

    let birthdate = document.createElement("p");
    birthdate.textContent = "Date of Birth: " + prophet.birthdate;
    card.appendChild(birthdate);

    let birthplace = document.createElement("p");
    birthplace.textContent = "Place of Birth: " + prophet.birthplace;
    card.appendChild(birthplace);

    let image = document.createElement("img");
    image.setAttribute("src", prophet.imageurl);
    image.setAttribute("alt", `${prophet.name} ${prophet.lastname} ${prophet.order}`);
    card.appendChild(image);

    document.querySelector("div.cards").appendChild(card);
}

