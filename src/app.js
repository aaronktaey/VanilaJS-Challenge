"use strict";

const clock = document.querySelector("#clock");
const secondClock = document.querySelector("#secondClock");
const nameDiv = document.querySelector("#nameDiv");
const nameInput = document.querySelector("#nameInput");
const nameButton = document.querySelector("#nameButton");
const focusDiv = document.querySelector("#focusDiv");
const focus = document.querySelector("#focus");
const focusInput = document.querySelector("#focusInput");
const focusButton = document.querySelector("#focusButton");
const bgImg = document.querySelector("#backgroundImage");

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

function randomNumberGenerator(range) {
  return Math.floor(Math.random() * range);
}

function drawBody() {
  const localStorageName = localStorage.getItem("name");
  const localStorageFocus = localStorage.getItem("focus");
  if (
    localStorageName != "" &&
    localStorageName != undefined &&
    localStorageName != null
  ) {
    nameDiv.innerHTML = `<h1>Hello, ${localStorageName}</h1>`;
  }
  if (
    localStorageFocus != "" &&
    localStorageFocus != undefined &&
    localStorageFocus != null
  ) {
    focusDiv.innerHTML = `<h3>${localStorageFocus}</h3>`;
  }

  bgImg.src = `img/${randomNumberGenerator(7)}.jpg`;
}

function handleNameButtonClick() {
  localStorage.setItem("name", nameInput.value);
  console.log("localstorage Saved... : ", nameInput.value);
  drawBody();
}

function handleFocusButtonCLick() {
  localStorage.setItem("focus", focusInput.value);
  console.log("localstorage Saved... : ", focusInput.value);
  drawBody();
}

updateClock();
setInterval(updateClock, 1000);
drawBody();
nameButton.addEventListener("click", handleNameButtonClick);
focusButton.addEventListener("click", handleFocusButtonCLick);
