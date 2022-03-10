// elements to handle
const title = document.querySelector("#title");
const colors = ["blue", "red", "orange", "purple"];

// functions to use
const superEventHandler = {
  handeTitleMouseEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  handeTitleMouseLeave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  handleDocRightClick: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[2];
  },
  handleBrwserResize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[3];
  },
};

//events to handle
title.addEventListener("mouseenter", superEventHandler.handeTitleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handeTitleMouseLeave);
document.addEventListener("contextmenu", superEventHandler.handleDocRightClick);
window.addEventListener("resize", superEventHandler.handleBrwserResize);
