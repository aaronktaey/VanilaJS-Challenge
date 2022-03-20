"use strict";

const nameForm = document.querySelector("#nameForm");
const nameInput = document.querySelector("#nameInput");
const nameButton = document.querySelector("#nameButton");
const focusForm = document.querySelector("#focusForm");
const focusInput = document.querySelector("#focusInput");
const focusButton = document.querySelector("#focusButton");
const bgImg = document.querySelector("html");

function randomNumberGenerator(range) {
  return Math.floor(Math.random() * range);
}

function drawBody() {
  const localStorageName = localStorage.getItem("name");
  const localStorageFocus = localStorage.getItem("focus");
  if (localStorageName != null) {
    nameForm.innerHTML = `<h1>Hello, ${localStorageName}</h1>`;
  }
  if (localStorageFocus != null) {
    focusForm.innerHTML = `<h3>${localStorageFocus}</h3>`;
  }
}

function handleNameFormSubmit(event) {
  event.preventDefault();
  if (nameInput.value != "") {
    localStorage.setItem("name", nameInput.value);
    console.log("localstorage Saved... : ", nameInput.value);
    drawBody();
  }
}

function handleFocusFormSubmit(event) {
  event.preventDefault();
  if (focusInput.value != "") {
    localStorage.setItem("focus", focusInput.value);
    console.log("localstorage Saved... : ", focusInput.value);
    drawBody();
  }
}

drawBody();
nameForm.addEventListener("submit", handleNameFormSubmit);
focusForm.addEventListener("submit", handleFocusFormSubmit);
