const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-menu-item");
const navHamburger= document.querySelector(".nav-hamburger");
const closeIcon= document.querySelector(".nav-close-icon");
const menuIcon = document.querySelector(".nav-menu-icon");

function toggleMenu() {
  if (menu.classList.contains("nav-show-menu")) {
    menu.classList.remove("nav-show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("nav-show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

navHamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)