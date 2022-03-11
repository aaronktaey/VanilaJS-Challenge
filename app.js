const body = document.querySelector("body");
const colors = ["red", "orange", "yellow", "green", "blue", "darkblue", "purple"]
function handleWindowResize(){
    const wInnerWidth = window.innerWidth;
    if(wInnerWidth < 200){
        body.style.backgroundColor = colors[0];
    }else if(wInnerWidth < 400){
        body.style.backgroundColor = colors[1];
    }else if(wInnerWidth < 600){
        body.style.backgroundColor = colors[2];
    }else if(wInnerWidth < 800){
        body.style.backgroundColor = colors[3];
    }else if(wInnerWidth < 1000){
        body.style.backgroundColor = colors[4];
    }else if(wInnerWidth < 1200){
        body.style.backgroundColor = colors[5];
    }else{
        body.style.backgroundColor = colors[6];
    }
}

window.addEventListener("resize", handleWindowResize);