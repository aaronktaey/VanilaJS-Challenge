'use strict';
document.body.style.transition = "backgroundColor 0.5s ease-in-out;"
const colorsButton = document.querySelector("button");
const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
function randomNumberGenerator(colorsArray){
    const rn = Math.floor(Math.random()*(colorsArray.length));
    return rn;
}
function getRandomColors(){
    const firstColor = colors[randomNumberGenerator(colors)]; 
    const newColors = colors.filter((color) => firstColor!=color);
    const secondColor = newColors[randomNumberGenerator(newColors)];
    changeBGColor(firstColor, secondColor);
}
function changeBGColor(firstColor, secondColor){
    console.log(`Change! 1 : ${firstColor}, 2 : ${secondColor}`);
    document.body.style.background = `linear-gradient(${firstColor},${secondColor})`;
}

colorsButton.addEventListener("click", getRandomColors);
getRandomColors();