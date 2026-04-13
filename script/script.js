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



