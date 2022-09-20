function Watch() {
  var hours = document.querySelector("#hours");
  var minutes = document.querySelector("#minutes");

  var getHours = new Date().getHours();
  var getMinutes = new Date().getMinutes();

  hours.innerHTML = getHours;
  minutes.innerHTML = getMinutes;
}

const isWatch = setInterval(Watch, 1);
