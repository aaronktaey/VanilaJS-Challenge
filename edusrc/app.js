// 셀렉터 선언부
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
drawBody();

