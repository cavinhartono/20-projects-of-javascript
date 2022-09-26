const deg = 6;
let hours = document.querySelector("#hour");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");

setInterval(() => {
  let today = new Date();
  let hour = today.getHours() * 30;
  let min = today.getMinutes() * deg;
  let sec = today.getSeconds() * deg;
  hours.style.transform = `rotateZ(${hour + min / 12}deg)`;
  minutes.style.transform = `rotateZ(${min}deg)`;
  seconds.style.transform = `rotateZ(${sec}deg)`;
});
