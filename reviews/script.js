const review = [
  {
    id: 1,
    name: "Cavin Hartono Putra",
    job: "Front End Developer",
    img: "/2021-07-06 09.09.10 2.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi porro quod tempore sequi optio ex eligendi blanditiis nulla vero?",
  },
  {
    id: 2,
    name: "Calista Hartono Putri",
    job: "Full Stack Developer",
    img: "/FB_IMG_16154505281847876.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi porro quod tempore sequi optio ex eligendi blanditiis nulla vero?",
  },
  {
    id: 3,
    name: "Alexander Ricky",
    job: "Back End Developer",
    img: "/b237cd28-9d1f-4f5b-87ee-7e9c10a52d65.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi porro quod tempore sequi optio ex eligendi blanditiis nulla vero?",
  },
];

const img = document.querySelector("#photo");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const description = document.querySelector("#description");

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let slidePosition = 0;

const showImage = (person) => {
  const item = review[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  description.textContent = item.text;
};

nextBtn.addEventListener("click", function () {
  slidePosition++;
  if (slidePosition > review.length - 1) {
    slidePosition = 0;
  }
  showImage(slidePosition);
});

prevBtn.addEventListener("click", function () {
  slidePosition--;
  if (slidePosition < 0) {
    slidePosition = review.length - 1;
  }
  showImage(slidePosition);
});

window.addEventListener("DOMContentLoaded", function () {
  const item = review[slidePosition];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  description.textContent = item.text;
});
