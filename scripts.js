const menuClose = document.getElementById("close_icon");
const menuOpen = document.getElementById("open_icon");
const navMenu = document.getElementById("nav_menu");

menuOpen.addEventListener("click", function () {
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
  navMenu.style.display = "flex";
});

menuClose.addEventListener("click", function () {
  navMenu.style.display = "none";
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});
