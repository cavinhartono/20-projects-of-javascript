const icon = document.querySelector(".iconBx");
const search = document.querySelector(".searchBx");

icon.onclick = function () {
  search.classList.toggle("active");
};
