// ********** set date ************
// select span
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});
// ********** navbar fixed ************
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});
