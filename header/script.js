const header = document.querySelector("header");

const HeaderScroller = () => {
  return this.scrollY >= 200
    ? header.classList.add("scroller")
    : header.classList.remove("scroller");
};

window.addEventListener("scroll", HeaderScroller);
