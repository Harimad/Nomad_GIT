const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos'; //localStorage key값의 이름
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
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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

const savedToDos = localStorage.getItem(TODOS_KEY); //해당 key값을 담기

if (savedToDos !== null) { //이 값이 있으면
  const parsedToDos = JSON.parse(savedToDos); // 그 값을 배열화 시킴
  parsedToDos.forEach((item) => console.log(`this is the turn of ${item}`)); // 하나씩 출력 해봄
}