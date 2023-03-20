// Get the form:
const form = document.querySelector('form');

// Listen the event 'submit' from the Form:
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form behavior

  // Get the values from the form spaces:
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastName').value;
  const title = document.getElementById('title').value;
  const mail = document.getElementById('mail').value;
  const phone = document.getElementById('phone').value;
  const businessName = document.getElementById('businessName').value;
  const membership = document.getElementById('membership').value;
  const description = document.getElementById('description').value;
  const date = new Date();

  // Create an object with the values of the Form:
  const formData = {
    name,
    lastName,
    title,
    mail,
    phone,
    businessName,
    membership,
    description,
    date
  };

  // Show form values in browser console:
  console.log(formData);

  // Send the form to the Page 'thankyou.html'
  form.action = 'thankyou.html';
  form.submit();
});
