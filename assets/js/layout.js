var hamburger = document.querySelector(".hamburger");
var navBar = document.querySelector(".navbar");
hamburger.addEventListener("click", function () {
  this.parentNode.parentNode.classList.toggle("navbar_active");
  navBar.classList.toggle("navbar_active");
});