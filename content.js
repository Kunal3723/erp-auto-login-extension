// content.js
// This script will modify the padding of the specified class on the active site

// Function to modify padding
function modifyPadding() {
    const elements = document.getElementsByClassName('page-content-container')[0];
    elements.style.padding = "20px";
    document.getElementById("header").remove();
}

// Listen for a message from the extension popup
// modifyPadding();
setTimeout(function() {
    // Call the function to modify padding after 5 seconds
    modifyPadding();
  }, 5000);
