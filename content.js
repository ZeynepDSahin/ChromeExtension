// content.js
console.log('content.js script started');

// Create a new button element
console.log('Creating new button element');
let button = document.createElement('button');
button.textContent = 'Generate Description';
console.log('Button element created');

// Append the button to the desired location on the page
console.log('Appending button to the page');
// let targetElement = document.querySelector('label[for="product_description"]');
let targetElement = document.querySelector('#default-section > div.qDEMCDizuqCjrxkUNcha > div.top-padding-15.menu-container-grid.product_details > div.kat-row.attributeGroup.attributeGroup-product_description > section > div.kat-row.kat-row-padding-top-bottom');
targetElement.insertAdjacentElement('afterend', button);
console.log('Button appended to the page');

// Add an event listener to the button
console.log('Adding event listener to the button');
button.addEventListener('click', function() {
  console.log('Button clicked');
  let productName = document.querySelector('input[name="productName"]').value;
  console.log('Product name: ', productName);
  let shortDescription = document.querySelector('textarea[name="shortDescription"]').value;
  console.log('Short description: ', shortDescription);

  // Make a request to your server-side API
  console.log('Making a request to the server-side API');
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
  .then(response => {
    console.log('Response received from the server');
    return response.json();
  })
  .then(data => {
    console.log('Data received from the server: ', data);
    // Insert detailed description into the page
    console.log('Inserting detailed description into the page');
    document.querySelector('textarea[name="detailedDescription"]').value = data.description;
    console.log('Detailed description inserted into the page');
  });
  console.log('Event listener added to the button');
});
console.log('content.js script ended');