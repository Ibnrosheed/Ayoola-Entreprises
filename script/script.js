dropdownBtn = document.getElementById('dropdownBtn');
dropdownMenu = document.getElementById('dropdownMenu');

dropdownBtn.addEventListener('click', function () {
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#dropdownBtn') && !event.target.matches('#dropdownBtn *')) {
        dropdownMenu.style.display = 'none';
    }
};

// Sign in button functionality
const signinBtn = document.getElementById('signinBtn');
signinBtn.addEventListener('click', function () {
    // alert('Sign in functionality is not implemented yet.');
    const loginForm = document.getElementById('loginForm');
    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
    }
    else {
        loginForm.style.display = 'block';
    }
}
);

//  Close the login form if the user clicks outside of it
window.onclick = function (event) {
    const loginForm = document.getElementById('loginForm');
    if (!event.target.matches('#signinBtn') && !event.target.matches('#signinBtn *') && !event.target.closest('#loginForm')) {
        loginForm.style.display = 'none';
    }
};

//  Close button functionality for the login form
const closeLoginForm = document.getElementById('closeLoginForm');
closeLoginForm.addEventListener('click', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';
});



