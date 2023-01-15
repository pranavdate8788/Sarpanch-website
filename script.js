const sidemenu = document.getElementsByClassName("sidemenu");
const menubars = document.getElementById("menubars");
const menuclose = document.getElementById("menuclose");

menubars.addEventListener("click", () => {
  sidemenu[0].classList.remove("hideSidemenu");
});

menuclose.addEventListener("click", () => {
  sidemenu[0].classList.add("hideSidemenu");
});

let currentSlide = 0;

function startSlider() {
  let imageCount = document.querySelectorAll("img");

  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll("img");
    images.style.transform = `translateX(0px)`;
    return;
  }

  let images = document.querySelector("ul");
  images.style.transform = `translateX(-${currentSlide * 650}px)`;

  if (currentSlide === imageCount.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}

setInterval(() => {
  startSlider();
}, 3000);

let Slide = 0;

function startSlider() {
  let imageCount = document.querySelectorAll("#image0");

  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll("#image0");
    images.style.transform = `translateX(0px)`;
    return;
  }

  let images = document.querySelector("#list");
  images.style.transform = `translateX(-${Slide * 650}px)`;

  if (Slide === imageCount.length - 1) {
    Slide = 0;
  } else {
    Slide++;
  }
}

setInterval(() => {
  startSlider();
}, 5000);

// slider 2
let activeSlide = 0;
function startSlider2() {
  let imageCount = document.querySelectorAll(".slider2 ul li").length;
  let images = document.querySelector(".slider2 ul");
  console.log();
  if (imageCount.length === 0) {
    // imageCount = document.querySelectorAll(".slider2 ul li").length;
    images.style.transform = `translateX(0px)`;
    return;
  }

  images.style.transform = `translateX(-${activeSlide * 650}px)`;
  if (activeSlide === imageCount - 1) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }
}

setInterval(() => {
  startSlider2();
}, 3000);
