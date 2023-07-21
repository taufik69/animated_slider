const slider = document.querySelectorAll(".slider");
const btnlist = document.querySelectorAll(".btn");
let currentSlide = 1;

let manualNav = function (manual) {
  slider.forEach((slide) => {
    slide.classList.remove("active");
  });
  btnlist.forEach((btn) => {
    btn.classList.remove("active");
  });
  slider[manual].classList.add("active");
  btnlist[manual].classList.add("active");
};

btnlist.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    manualNav(i);
  });
});
