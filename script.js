"use strict";

//selecting elements
const nextBtn = document.querySelector(".btn--next");
const prevBtn = document.querySelector(".btn--prev");
const progressBar = document.querySelector(".progress-bar");
const circles = document.querySelectorAll(".circle");

const totalCircles = circles.length;
const increment = 100 / (totalCircles - 1);

let cnt = 1;

//Initial state setup
toggleButtonState();
updateActiveCircle();

//logic
nextBtn.addEventListener("click", function () {
  cnt++;
  updateProgressBar();
});

prevBtn.addEventListener("click", function () {
  cnt--;
  updateProgressBar();
});

function toggleButtonState() {
  prevBtn.disabled = cnt === 1;
  nextBtn.disabled = cnt === totalCircles;
}

function updateActiveCircle() {
  circles.forEach((circle, idx) => {
    if (idx < cnt) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

function updateProgressBar() {
  progressBar.style.width = `${(cnt - 1) * increment}%`;
  updateActiveCircle();
  toggleButtonState();
}
