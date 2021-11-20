//dropdown menu
const btn = document.querySelector('.bar');
const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelector('.nav-component')

btn.addEventListener('click', function() {
    if (navLinks.style.zIndex === '') {
        navBar.style.height = '9rem';
        navLinks.style.zIndex = 1;
    }
    else {
        navBar.style.height = '4.5rem';
        navLinks.style.zIndex = '';
    }

});

//
