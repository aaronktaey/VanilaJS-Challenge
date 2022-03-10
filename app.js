const title = document.querySelector("#title");
const body = document.querySelector("body");
function handeTitleMouseEnter() {
  title.innerText = "The mouse is here!";
  title.style.color = "blue";
}
function handeTitleMouseLeave() {
  title.innerText = "The mouse is gone!";
  title.style.color = "red";
}
function handleDocRightClick() {
  title.innerText = "That was a right click!";
  title.style.color = "orange";
}
function handleBrwserResize() {
  title.innerText = "You just resized!";
  title.style.color = "purple";
}

title.addEventListener("mouseenter", handeTitleMouseEnter);
title.addEventListener("mouseleave", handeTitleMouseLeave);
document.addEventListener("contextmenu", handleDocRightClick);
window.addEventListener("resize", handleBrwserResize);
