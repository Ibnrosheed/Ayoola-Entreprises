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
    if (loginForm.style.display === 'flex') {
        loginForm.style.display = 'none';
    }
    else {
        loginForm.style.display = 'flex';
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

// LOG IN AND SIGN UP BOTTUN

const btnSignup = document.getElementById('btnSignup');
const btnLogin = document.getElementById('btnLogin');
const loginContainer = document.getElementById('loginContainer');
const signupContainer = document.getElementById('signupContainer');

btnSignup.addEventListener('click', function () {
    if (signupContainer.style.display === 'block') {
        signupContainer.style.display = 'none';
    } else {
        signupContainer.style.display = 'block';
        loginContainer.style.display = 'none';
    }
});

btnLogin.addEventListener('click', function () {
    if (loginContainer.style.display === 'block') {
        loginContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    }
});
