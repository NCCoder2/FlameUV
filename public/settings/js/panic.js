// Retrieve panic key and website from local storage
var panicKey = localStorage.getItem("panicKey");
var panicWebsite = localStorage.getItem("panicWebsite");

// Set initial values or retrieved values
document.getElementById("panic-key-input").value = panicKey || "]";
document.getElementById("panic-website-input").value = panicWebsite || "https://classroom.google.com";

// Function to save panic key and website
function setPanicKey() {
  var keyInput = document.getElementById("panic-key-input").value;
  var websiteInput = document.getElementById("panic-website-input").value;

  localStorage.setItem("panicKey", keyInput);
  localStorage.setItem("panicWebsite", websiteInput);

  alert("Panic Key and Website saved!");
}

// Function to handle keydown event and trigger redirection
document.addEventListener("keydown", function(event) {
  var panicKey = localStorage.getItem("panicKey");
  var panicWebsite = localStorage.getItem("panicWebsite");

  if (event.key === (panicKey || "]")) {
    var website = (panicWebsite || "https://classroom.google.com").toLowerCase();

    // Check if "http://" or "https://" is missing and add it
    if (!website.startsWith("http://") && !website.startsWith("https://")) {
      website = "http://" + website;
    }

    window.location.href = website;
  }
});