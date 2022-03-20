const clock = document.querySelector("#clock");
const secondClock = document.querySelector("#secondClock");

function updateClock() {
  const timeNow = new Date();
  const hh =
    timeNow.getHours() < 10 ? "0" + timeNow.getHours() : timeNow.getHours();
  const mm =
    timeNow.getMinutes() < 10
      ? "0" + timeNow.getMinutes()
      : timeNow.getMinutes();
  const ss =
    timeNow.getSeconds() < 10
      ? "0" + timeNow.getSeconds()
      : timeNow.getSeconds();
  clock.innerHTML = `${hh}:${mm}`;
  secondClock.innerHTML = ss;
}
updateClock();
setInterval(updateClock, 1000);
