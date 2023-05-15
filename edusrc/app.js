// 엘레멘트 선언부
const clock = document.querySelector('#clock');
const body = document.querySelector('body');
const nameInput = document.querySelector('#nameInput');
const nameForm = document.querySelector('#nameForm');
const focusInput = document.querySelector('#focusInput');
const focusForm = document.querySelector('#focusForm');
const todoInput = document.querySelector('#todoInput');
const todoForm = document.querySelector('#todoForm');

// 이벤트 리스너 추가
clock.addEventListener('click',tiktok);
nameForm.addEventListener('submit', handleFormKeydown);
focusForm.addEventListener('submit', handleFormKeydown)
todoForm.addEventListener('submit', handleFormKeydown)

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

function generateId(){
    return Math.floor(Math.random() * 100)
}

function handleFormKeydown(e){
    e.preventDefault();
    const formValue = e.target.children[1].value;
    if(e.target.id === 'nameForm'){
        localStorage.setItem('name', formValue);
        
    }else if(e.target.id === 'focusForm'){
        localStorage.setItem('focus', formValue);
    }else if(e.target.id === 'todoForm'){
        localStorage.setItem('todo', formValue);
    }
    drawBody();
}

function drawBody(){
    const localStorageName = localStorage.getItem('name');
    const localStorageFocus = localStorage.getItem('focus');
    if(localStorageName != null){
        nameForm.innerHTML = `<h1>안녕하세요, ${localStorageName}님!</h1>`
    }
    if(localStorageFocus != null){
        focusForm.innerHTML = `<h3>오늘의 포커스는 ${localStorageFocus}입니다.</h3>`
    }
}

//실행부
tiktok();
setInterval(tiktok,1000);
drawBody();

