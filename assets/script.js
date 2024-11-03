const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagline");
const dots = document.querySelector(".dots");
let index = 0;

const updateSlide = () => {
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  tagLine.innerHTML = slides[index].tagLine;
  initializeAndUpdateDots();
};

const initializeAndUpdateDots = () => {
  // Supprimer tous les points de navigation existants
  dots.innerHTML = "";

  // Créer et mettre à jour les points de navigation
  slides.forEach((_, i) => {
    const dotElt = document.createElement("div");
    dotElt.classList.add("dot");
    console.log(index);
    if (i === index) {
      dotElt.classList.add("dot_selected");
    }
    dots.appendChild(dotElt);
  });
};
const clickOnArrow = (direction) => {
  if (direction === "left") {
    index = (index - 1 + slides.length) % slides.length;
  } else {
    index = (index + 1) % slides.length;
  }
  updateSlide();
};

arrow_left.addEventListener("click", () => clickOnArrow("left"));
arrow_right.addEventListener("click", () => clickOnArrow("right"));

// Initialiser la première diapositive

updateSlide();
