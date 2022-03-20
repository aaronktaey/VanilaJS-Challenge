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
  newTodoElement.id = newTodo.id;
  button.innerText = "Done";
  button.addEventListener("click", deleteTodo);
  newTodoElement.appendChild(span);
  newTodoElement.appendChild(button);
  span.innerHTML = newTodo.text;
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
  localStorage.setItem(
    TODOS_KEY,
    JSON.stringify(
      JSON.parse(localStorage.getItem(TODOS_KEY)).filter(
        (item) => li.id != item.id
      )
    )
  );
}

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  if (newTodo != "") {
    const newTodoObj = {
      id: Date.now(),
      text: newTodo,
    };
    paintTodo(newTodoObj);
    todoInput.value = "";
  }
}

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleTodoFormSubmit);
