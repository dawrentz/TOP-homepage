//index.js

//imports
import "./style.css";
import * as mod from "./mod.js";

//declarations
const cards = document.querySelectorAll(".card");

// ====================================== Init ====================================== //

cards.forEach((card) => {
  card.addEventListener("mouseover", () => addHoverCardStyle(card));
  card.addEventListener("mouseout", () => removeHoverCardStyle(card));
});

function addHoverCardStyle(card) {
  const projectPic = card.querySelector(".project-pic");
  const projectPicTitle = card.querySelector(".project-pic-title");

  projectPic.classList.add("hovered");
  projectPicTitle.classList.add("hovered");
}

function removeHoverCardStyle(card) {
  const projectPic = card.querySelector(".project-pic");
  const projectPicTitle = card.querySelector(".project-pic-title");

  projectPic.classList.remove("hovered");
  projectPicTitle.classList.remove("hovered");
}
