const container = document.querySelector(".container");
const input = container.querySelector(".inputURL");
const btn = container.querySelector(".btn");
const output = container.querySelector(".qr");

btn.addEventListener("click", () => {
  let value = input.value;
  output.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
  output.addEventListener("load", () => {
    container.classList.add("active");
  });
});
