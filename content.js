// content.js
let productName = document.querySelector('input[name="productName"]').value;
let shortDescription = document.querySelector('textarea[name="shortDescription"]').value;

// Make a request to your server-side API
fetch('https://your-server.com/api/generate-description', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    productName: productName,
    shortDescription: shortDescription,
  }),
})
.then(response => response.json())
.then(data => {
  // Insert detailed description into the page
  document.querySelector('textarea[name="detailedDescription"]').value = data.description;
});