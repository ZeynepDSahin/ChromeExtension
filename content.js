// content.js
console.log('content.js script started');

let lastClickedTextbox = null;

// Add event listener to all textboxes to track the last clicked one
let inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
  input.addEventListener('focus', function() {
    lastClickedTextbox = this;
    console.log('Input field focused');
  });
});

// lastClickedTextbox=document.querySelector('#product_description');

function generateDescription() {
  lastClickedTextbox=document.querySelector('#product_description');
  console.log('Textbox clicked');
  let productName = document.querySelector('#reconcile-item-title').value;
  console.log('Product name: ', productName);
  lastClickedTextbox.value = productName;
  // let shortDescription = document.querySelector('textarea[name="shortDescription"]').value;
  // console.log('Short description: ', shortDescription);

  // Make a request to your server-side API
//   console.log('Making a request to the server-side API');
//   fetch('https://your-server.com/api/generate-description', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       productName: productName,
//       shortDescription: shortDescription,
//     }),
//   })
//   .then(response => {
//     console.log('Response received from the server');
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data received from the server: ', data);
//     // Insert detailed description into the last clicked textbox
//     console.log('Inserting detailed description into the textbox');
//     if (lastClickedTextbox) {
//       lastClickedTextbox.value = data.description;
//       console.log('Detailed description inserted into the textbox');
//     } else {
//       console.log('No textbox was clicked');
//     }
//   });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "generateDescription") {
    // Your existing code to generate the description and place it in the text box
    generateDescription();
  }
});

console.log('content.js script ended');


