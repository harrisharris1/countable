// const hamburgerMenu = document.querySelector('.hamburger_menu');
// const navModal = document.querySelector('.nav_modal');
// const navMobile = document.querySelector('.nav_mobile');

// hamburgerMenu.addEventListener('click', () => {
//   hamburgerMenu.classList.toggle('opened');
//   navModal.classList.toggle('active');
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

window.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
     document.querySelector(".hamburger").focus();
    }
   }, false);
