"use strict";

const clock = document.querySelector("#clock");
const secondClock = document.querySelector("#secondClock");
const nameForm = document.querySelector("#nameForm");
const nameInput = document.querySelector("#nameInput");
const nameButton = document.querySelector("#nameButton");
const focusForm = document.querySelector("#focusForm");
const focus = document.querySelector("#focus");
const focusInput = document.querySelector("#focusInput");
const focusButton = document.querySelector("#focusButton");
const bgImg = document.querySelector("html");

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
    nameForm.innerHTML = `<h1>Hello, ${localStorageName}</h1>`;
  }
  if (
    localStorageFocus != "" &&
    localStorageFocus != undefined &&
    localStorageFocus != null
  ) {
    focusForm.innerHTML = `<h3>${localStorageFocus}</h3>`;
  }
  // document.querySelector(
  //   "html"
  // ).style.backgroundImage = `url(img/${randomNumberGenerator(7)}.jpg)`;
}

function handleNameFormSubmit(event) {
  event.preventDefault();
  localStorage.setItem("name", nameInput.value);
  console.log("localstorage Saved... : ", nameInput.value);
  drawBody();
}

function handleFocusFormSubmit(event) {
  event.preventDefault();
  localStorage.setItem("focus", focusInput.value);
  console.log("localstorage Saved... : ", focusInput.value);
  drawBody();
}

updateClock();
setInterval(updateClock, 1000);
drawBody();
nameForm.addEventListener("submit", handleNameFormSubmit);
focusForm.addEventListener("submit", handleFocusFormSubmit);
