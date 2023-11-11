// popup.js
document.getElementById('generate').addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "content.js"});
  });