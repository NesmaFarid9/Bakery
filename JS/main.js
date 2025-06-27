let navEdit = document.getElementById('navEdit');
let logoEdit = document.getElementById('logoEdit');
let navLinks = document.querySelectorAll('.nav-link');
// start nav scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navEdit.classList.add("scrolled");
    logoEdit.src = './images/bakery-color.png';
  } else {
    navEdit.classList.remove("scrolled");
    logoEdit.src = './images/bakery-light-1.png';
  }
});
// end nav scroll
// add border top when click
navLinks.forEach(links =>{
    links.addEventListener('click', function(){
        navLinks.forEach(nav => nav.classList.remove('border-top'));
        this.classList.add('border-top');
    });
});