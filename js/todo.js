const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos'; //localStorage key값의 이름
let toDos = []; //새로고침하면 toDos값이 초기화 됨 -> 아래에 toDos값을 계속 가지도록 toDos = JSON.parse(localStorage.getItem(TODOS_KEY)) 함

function handleTodoForm(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  todoInput.focus();

  const newTodoObj = { // 객체 값을 새로 만듬
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj); //object 형태로 toDos배열에 넣음
  paintToDo(newTodoObj); //object를 매개변수로 넘김

  saveToDos();
}

function saveToDos() { //toDos를 localStorage에 넣는 함수
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) { //매개변수 newTodo는 Object로 넘어왔음
  const li = document.createElement('li');
  li.id = newTodo.id; //li에 id값을 넣어서 나중에 Delete 하기 쉽게 만듬

  const span = document.createElement('span');
  li.style.listStyleType = 'none'; //li 스타일제거
  span.innerText = newTodo.text;

  const btn = document.createElement('button');
  btn.innerText = '❌'
  btn.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  li.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //#7.8 강의
  saveToDos();
}

todoForm.addEventListener('submit', handleTodoForm);

const savedToDos = localStorage.getItem(TODOS_KEY); //해당 key값을 담기

if (savedToDos !== null) { //이 값이 있으면
  const parsedToDos = JSON.parse(savedToDos); // 그 값을 배열화 시킴
  toDos = parsedToDos; // 현재 localStorage 값을 toDos에 값 복원

  parsedToDos.forEach(paintToDo); // 하나씩 출력 해봄
}