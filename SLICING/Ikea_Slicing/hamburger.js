document.addEventListener("DOMContentLoaded", function () {
    initial();
});
const initial = () => {
    bindEventListenerss();
}
const hamburgerButton = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const overlayy = document.querySelector('.overlay');
const bindEventListenerss = () => {
    hamburgerButton.addEventListener('click', openHamburgerMenu);
    hamburgerMenu.addEventListener('click', closeHamburgerMenu);
    overlayy.addEventListener('click', closeHamburgerMenu);
}
const openHamburgerMenu = () => {
    hamburgerMenu.classList.remove('closeHamburger');
    overlayy.classList.remove('hidden');
}
const closeHamburgerMenu = (event) => {
    if(event.target.closest('.hamburger-menu__close') || event.target.closest('.overlay')) {
        hamburgerMenu.classList.add('closeHamburger');
        overlayy.classList.add('hidden');
    }
    else {
        event.preventDefault();
    }
}