// popup.js
// chrome.tabs.executeScript(null, {file: "content.js"});
// });
document.getElementById('generate').addEventListener('click', function() {
    this.textContent = "Generating...";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "generateDescription"});
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "descriptionGenerated") {
    document.getElementById('generate').textContent = "Regenerate?";
  }
});


