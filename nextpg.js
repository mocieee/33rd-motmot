// Define the URL for the next page.
// CHANGE "the_message.html" to the actual filename of your next page.
const NEXT_PAGE_URL = "page3.html"; 

/**
 * Redirects the user to the next page when the button is pressed.
 */
function goToNextPage() {
    // This command redirects the browser to the specified URL.
    window.location.href = NEXT_PAGE_URL; 
}