const modal = document.querySelector(".container");
const contentModal = document.querySelector(".open-modal");

modal.onclick = function () {
  modal.classList.toggle("active");
  contentModal.classList.toggle("active");
};
