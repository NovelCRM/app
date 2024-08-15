function updateLinkTag() {
    // Get the current URL
    var url = window.location.href;

    // Split the URL into parts using the '/' delimiter
    var parts = url.split('/');

    // Find the index of the 'location' part
    var locationIndex = parts.indexOf('location');

    // Get the locationID, which is the part immediately after 'location'
    var locationID = (locationIndex !== -1 && locationIndex + 1 < parts.length) ? parts[locationIndex + 1] : null;

    // If a locationID exists, update or create the link element
    if (locationID) {
        var existingLink = document.querySelector('link[data-dynamic="true"]');
        if (existingLink) {
            // Update the href of the existing link element
            existingLink.href = 'https://novelcrm.github.io/app/' + locationID + '.css';
        } else {
            // Create a new link element
            var link = document.createElement('link');

            // Set the attributes for the link element
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://novelcrm.github.io/app/' + locationID + '.css';
            link.setAttribute('data-dynamic', 'true'); // Mark this link as dynamic

            // Append the link element to the head
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    }
}

// Monitor changes to the URL using the popstate event
window.addEventListener('popstate', updateLinkTag);

// Optionally, monitor the URL changes using a MutationObserver (for SPAs)
var observer = new MutationObserver(function() {
    updateLinkTag();
});

// Observe changes in the URL path (if applicable)
observer.observe(document.querySelector('body'), { childList: true, subtree: true });

// Initial call to set the link tag on page load
updateLinkTag();
