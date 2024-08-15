var url = window.location.href;

// Split the URL into parts using the '/' delimiter
var parts = url.split('/');

// Find the index of the 'location' part
var locationIndex = parts.indexOf('location');

// Get the locationID, which is the part immediately after 'location'
var locationID = (locationIndex !== -1 && locationIndex + 1 < parts.length) ? parts[locationIndex + 1] : null;
// Create a new link element
var link = document.createElement('link');

// Set the attributes for the link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://example.com/style.css'; // URL of the external CSS file

// Append the link element to the head
document.getElementsByTagName('head')[0].appendChild(link);
