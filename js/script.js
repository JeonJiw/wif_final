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

/* Online Estimate */

function EstimateCal() {
  let maintenance = document.getElementById("maintenance").value;
  let fertilization = document.getElementById("fertilization").value;
  let thatching = document.getElementById("thatching").value;
  let mulching = document.getElementById("mulching").value;
  let seeding = document.getElementById("seeding").value;
  let aeration = document.getElementById("aeration").value;
  let treeInspections = document.getElementById("tree-inspections").value;
  let treeTrimming = document.getElementById("tree-trimming").value;
  let shrubPruning = document.getElementById("shrub-pruning").value;
  let weedManagement = document.getElementById("weed-management").value;
  let treeRemoval = document.getElementById("tree-removal").value;

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
  console.log(estimatePrice);
}
