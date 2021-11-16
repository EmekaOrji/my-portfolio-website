var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.parentNode.parentNode.classList.toggle("navbar_active");
});
hamburger.addEventListener("focus", function () {
  this.parentNode.parentNode.classList.add("navbar_active");
});
hamburger.addEventListener("blur", function () {
  this.parentNode.parentNode.classList.remove("navbar_active");
});