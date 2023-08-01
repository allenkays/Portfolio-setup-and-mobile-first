// JavaScript for mobile-first navigation menu
const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuItems = document.querySelectorAll('.menu-items');
hamburgerIcon.addEventListener('click', () => {
  menuItems.forEach((item) => item.classList.toggle('show'));
  hamburgerIcon.classList.toggle('show');
});
document.querySelectorAll('.menu-items').forEach((item) => item.addEventListener('click', () => {
  menuItems.forEach((item) => item.classList.remove('show'));
  hamburgerIcon.classList.remove('show');
}));