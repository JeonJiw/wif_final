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

function toggleList(event) {
  const parentDiv = event.target.parentNode;
  const resOpenSpan = document.querySelector("#res-open");
  const resCloseSpan = document.querySelector("#res-close");
  const comOpenSpan = document.querySelector("#com-open");
  const comCloseSpan = document.querySelector("#com-close");
  const resList = document.querySelector("#res-list");
  const comList = document.querySelector("#com-list");

  if (parentDiv.classList.contains("residential-title")) {
    if (resList.style.display === "none") {
      resList.style.display = "block";
      resOpenSpan.style.display = "none";
      resCloseSpan.style.display = "inline";
    } else {
      resList.style.display = "none";
      resOpenSpan.style.display = "inline";
      resCloseSpan.style.display = "none";
    }
  } else if (parentDiv.classList.contains("commercial-title")) {
    if (comList.style.display === "none") {
      comList.style.display = "block";
      comOpenSpan.style.display = "none";
      comCloseSpan.style.display = "inline";
    } else {
      comList.style.display = "none";
      comOpenSpan.style.display = "inline";
      comCloseSpan.style.display = "none";
    }
  }
}
