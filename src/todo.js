const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todoInput");
const todoButton = todoForm.querySelector("#todoButton");
const todoList = document.querySelector("#todoList");
const todos = [];
const TODOS_KEY = "todos";
function paintTodo(newTodo) {
  const newTodoElement = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  newTodoElement.appendChild(span);
  newTodoElement.appendChild(button);
  span.innerHTML = newTodo;
  todoList.appendChild(newTodoElement);
  todos.push(newTodo);
  saveTodos(JSON.stringify(todos));
}

function saveTodos(todos) {
  localStorage.setItem(TODOS_KEY, todos);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  paintTodo(newTodo);
  todoInput.value = "";
}

function sayHello(item) {
  console.log("Hello!", item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(sayHello);
  console.log(parsedTodos);
}

todoForm.addEventListener("submit", handleTodoFormSubmit);
