/* Footer year */
const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML = currentYear;

/* Header Navbar */

const navbar = document.getElementById("nav-bar");
const menuIcon = document.getElementById("menu-icon");

let isOpen = 0;
function toggleNavbar() {
  if (isOpen === 0) {
    navbar.style.display = "block";
    isOpen = 1;
  } else {
    navbar.style.display = "none";
    isOpen = 0;
  }
}

/* About us slide */

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

if (window.location.href == "http://127.0.0.1:5500/about.html") {
  showSlide();
}

/* Services lists */

function toggleList(event) {
  let parentDiv = event.target.parentNode;
  let resOpenSpan = document.querySelector("#res-open");
  let resCloseSpan = document.querySelector("#res-close");
  let comOpenSpan = document.querySelector("#com-open");
  let comCloseSpan = document.querySelector("#com-close");
  let resList = document.querySelector("#res-list");
  let comList = document.querySelector("#com-list");

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

/* Online Estimate */

function calculateEstimatePrice() {
  const maintenance = document.getElementById("maintenance").value;
  const fertilization = document.getElementById("fertilization").value;
  const thatching = document.getElementById("thatching").value;
  const mulching = document.getElementById("mulching").value;
  const seeding = document.getElementById("seeding").value;
  const aeration = document.getElementById("aeration").value;
  const treeInspections = document.getElementById("tree-inspections").value;
  const treeTrimming = document.getElementById("tree-trimming").value;
  const shrubPruning = document.getElementById("shrub-pruning").value;
  const weedManagement = document.getElementById("weed-management").value;
  const treeRemoval = document.getElementById("tree-removal").value;

  let priceMaintainace = maintenance * 10;
  let priceFertilization = fertilization * 0.003;
  let priceThatching = thatching * 0.004;
  let priceMulching = mulching * 0.001;
  let priceSeeding = seeding * 0.007;
  let priceAeration = aeration * 0.003;
  let priceTreeInspections = treeInspections * 5;
  let priceTreeTrimming = treeTrimming * 40;
  let priceShrubPruning = shrubPruning * 10;
  let priceWeedManagement = weedManagement * 10;
  let priceTreeRemoval = treeRemoval * 80;

  let resultOfEstimate =
    priceMaintainace +
    priceFertilization +
    priceThatching +
    priceMulching +
    priceSeeding +
    priceAeration +
    priceTreeInspections +
    priceTreeTrimming +
    priceShrubPruning +
    priceWeedManagement +
    priceTreeRemoval;

  let estimatePrice = document.querySelector(".estimate-price");
  estimatePrice.innerHTML = resultOfEstimate;
}
