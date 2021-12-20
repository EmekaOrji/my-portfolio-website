var navBar = document.querySelector(".navbar");
var navItem = document.querySelectorAll(".navbar_item");
setTimeout(() => {
  navItem.forEach(e => {
    e.classList.add("navbar_item_visible");
    e.classList.remove("navbar_item_hidden");
  });
}, 400);
setTimeout(() => {
  navItem.forEach(e => {
    e.classList.remove("navbar_item_visible");
    e.classList.add("navbar_item_hidden");
  });
}, 4400);
navBar.addEventListener("mouseover", () => {
  navItem.forEach(e => {
    e.classList.add("navbar_item_visible");
    e.classList.remove("navbar_item_hidden");
  });
});
navBar.addEventListener("mouseleave", () => {
  setTimeout(() => {
    navItem.forEach(e => {
      e.classList.remove("navbar_item_visible");
      e.classList.add("navbar_item_hidden");
    });
  }, 3000);
});


var headerTitle = document.querySelector(".main_title");
document.onscroll = () => document.querySelector(".header").getBoundingClientRect().bottom < 35 ? headerTitle.classList.add("title_visible") : headerTitle.classList.remove("title_visible");