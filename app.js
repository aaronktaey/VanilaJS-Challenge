'use strict';
const title = document.querySelector("#title");
const time = document.querySelector("#time");
let xMas = new Date("2022-12-25T00:00:00");
let timeLeft;
const timePassBy = () =>{
    const now = new Date();
    timeLeft = xMas.getTime() - now.getTime();
    
    const day = Math.floor(timeLeft/(1000*60*60*24));
    const hh = Math.floor(timeLeft%(1000*60*60*24)/(1000*60*60));
    const mm = Math.floor(timeLeft%(1000*60*60)/(1000*60));
    const ss = Math.floor(timeLeft%(1000*60)/1000);
    
    time.innerHTML = `${day}d ${hh>=10?hh:"0"+hh}h ${mm>=10?mm:"0"+mm}m ${ss>=10?ss:"0"+ss}s`;
}
timePassBy();
setInterval(() => timePassBy(), 1000);