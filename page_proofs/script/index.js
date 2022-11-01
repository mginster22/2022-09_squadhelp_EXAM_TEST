const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav_menu");

const navbars = document.querySelectorAll(".active_burger .nav_menu_item");
const navMenuItems = document.querySelector(".nav_menu_item");
const subNavMenuLists = document.querySelector(".sub_nav_menu_list");
const activeBurger = document.querySelector(".active_burger");
console.log(navbars);

burger.addEventListener("click", () => {
  if (navBar.classList.contains("nav_menu")) {
    navBar.classList.add("active_burger");
    navBar.classList.remove("nav_menu");
  } else {
    navBar.classList.add("nav_menu");
    navBar.classList.remove("active_burger");
  }
});

navMenuItems.addEventListener("click", () => {
  if (subNavMenuLists.classList.contains("sub_nav_menu_list")) {
    subNavMenuLists.classList.add("none");
    subNavMenuLists.classList.remove("sub_nav_menu_list");
  } else {
    subNavMenuLists.classList.add("sub_nav_menu_list");
    subNavMenuLists.classList.add("none");
  }
});
