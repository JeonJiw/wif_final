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

const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("on");
  }
  current++;
  if (current > slides.length) {
    current = 1;
  }
  slides[current - 1].classList.add("on");
  setTimeout(showSlide, 3000);
}

showSlide();
