let slidePostion = 0;

const slides = document.querySelectorAll(".carousel_item");
const slidesLength = slides.length;

function renderSlide() {
  for (let slide of slides) {
    slide.classList.remove("visible");
    slide.classList.add("hidden");
  }

  slides[slidePostion].classList.add("visible");
}

function nextSlide() {
  if (slidePostion === slidesLength - 1) {
    slidePostion = 0;
  } else {
    slidePostion++;
  }

  renderSlide();
}

function prevSlide() {
  if (slidePostion === 0) {
    slidePostion = slidesLength - 1;
  } else {
    slidePostion--;
  }

  renderSlide();
}

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

next.addEventListener("click", function () {
  nextSlide();
});

prev.addEventListener("click", function () {
  prevSlide();
});
