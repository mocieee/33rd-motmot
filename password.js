// --- SET YOUR SECRET PASSCODE HERE ---
const SECRET_PASSCODE = "122722"; 
// ------------------------------------

// IMPORTANT: Set the file name of the page to redirect to
const SUCCESS_PAGE_URL = "page2.html"; 
// --------------------------------------------------------

const input = document.getElementById('passcode-input');
const loginScreen = document.getElementById('login-screen');
const errorMsg = document.getElementById('error-msg');

function checkPasscode() {
    if (input.value.toUpperCase() === SECRET_PASSCODE) {
        
        // Correct Passcode: Redirect to the new page!
        loginScreen.style.opacity = 0; // Optional: Fade out effect before leaving
        
        setTimeout(() => {
            window.location.href = SUCCESS_PAGE_URL; // THIS IS THE KEY CHANGE
        }, 500); // Wait 0.5 seconds for a smooth transition effect
        
    } else {
        // Incorrect Passcode: Show error message
        errorMsg.style.opacity = 1;
        input.value = ''; // Clear input
        setTimeout(() => {
            errorMsg.style.opacity = 0;
        }, 3000);
    }
}

// This function lets the user press 'Enter' to check the passcode
function checkKey(event) {
    if (event.key === 'Enter') {
        checkPasscode();
    }
}