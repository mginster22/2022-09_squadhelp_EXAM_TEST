const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav_menu");

burger.addEventListener("click", () => {
  if (navBar.classList.contains("nav_menu")) {
    navBar.classList.add("active_burger");
    navBar.classList.remove("nav_menu");
  } else {
    navBar.classList.add("nav_menu");
    navBar.classList.remove("active_burger");
  }
});

// document.querySelector(".burger").onclick = function () {
//   document.querySelector(".nav_menu").classList.add("active_burger");
// };
