// Obtener elementos del formulario
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const fruit1Select = document.querySelector('#fruit1');
const fruit2Select = document.querySelector('#fruit2');
const fruit3Select = document.querySelector('#fruit3');
const instructionsTextarea = document.querySelector('#instructions');


fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(fruit => {
      const option1 = document.createElement('option');
      const option2 = document.createElement('option');
      const option3 = document.createElement('option');
      option1.value = fruit.name;
      option1.textContent = fruit.name;
      option2.value = fruit.name;
      option2.textContent = fruit.name;
      option3.value = fruit.name;
      option3.textContent = fruit.name;
      fruit1Select.appendChild(option1);
      fruit2Select.appendChild(option2);
      fruit3Select.appendChild(option3);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

// Controlador de eventos para el envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío a una nueva página

  // Obtener los valores del formulario
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const fruit1 = fruit1Select.value;
  const fruit2 = fruit2Select.value;
  const fruit3 = fruit3Select.value;
  const instructions = instructionsTextarea.value;

  // Obtener la fecha del pedido
  const date = new Date();

  // Obtener información de las frutas seleccionadas
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;
  const selectedFruits = [fruit1, fruit2, fruit3];
  data.forEach(fruit => {
    if (selectedFruits.includes(fruit.name)) {
      totalCarbs += fruit.carbs;
      totalProtein += fruit.protein;
      totalFat += fruit.fat;
      totalSugar += fruit.sugar;
      totalCalories += fruit.calories;
    }
  });

  // Crear la salida formateada y mostrarla en el elemento de salida
  const output = document.querySelector('#output');
  output.innerHTML = `
    <h2>Your Order:</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Fruit 1:</strong> ${fruit1}</p>
    <p><strong>Fruit 2:</strong> ${fruit2}</p>
    <p><strong>Fruit 3:</strong> ${fruit3}</p>
    <p><strong>Special Instructions:</strong> ${instructions}</p>
    <p><strong>Order date:</strong> ${date.toLocaleDateString()}</p>
    <h3>Nutritional information</h3>
    <ul>
      <li>Total Carbohydrates: ${totalCarbs.toFixed(2)} g</li>
      <li>Total Proteins: ${totalProtein.toFixed(2)} g</li>
      <li>Total Fats: ${totalFat.toFixed(2)} g</li>
      <li>Total Sugar: ${totalSugar.toFixed(2)} g</li>
      <li>Total Calories: ${totalCalories.toFixed(2)} kcal</li>
      </ul>
      `;
    });
