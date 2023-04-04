let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("current-year").innerHTML = currentYear;

let navbar = document.getElementById("nav-bar");
let menuIcon = document.getElementById("menu-icon");

let open = 0;
function openNav() {
  if (open === 0) {
    navbar.style.display = "block";
    open = 1;
  } else {
    navbar.style.display = "none";
    open = 0;
  }
}
