const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

const toDos = [];

function handleTodoForm(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  todoInput.focus();
  
  toDos.push(newTodo);
  saveToDos();

  paintToDo(newTodo);
}

function saveToDos() { //toDos를 localStorage에 넣는 함수
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement('li')
  const span = document.createElement('span');
  li.style.listStyleType = 'none'; //li 스타일제거
  span.innerText = newTodo;
  const btn = document.createElement('button');
  btn.innerText = '❌'
  btn.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const element = event.target.parentNode;
  element.remove();
}

todoForm.addEventListener('submit', handleTodoForm);