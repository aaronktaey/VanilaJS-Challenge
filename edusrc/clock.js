// 셀렉터 선언부
const clock = document.querySelector('#clock');

// 함수 선언부
function tiktokFormat(time){
    return time.toString().length === 1 ? `0${time}` : `${time}`;
}

function tiktok(){
    const now = new Date();
    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes();
    const nowSeconds = now.getSeconds();
    clock.innerHTML = `${tiktokFormat(nowHours)}:${tiktokFormat(nowMinutes)}:${tiktokFormat(nowSeconds)}`;
}


//실행부
tiktok();
setInterval(tiktok,1000);