const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

function handleTodoForm(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  todoInput.focus();
  
  paintToDo(newTodo);
}

function paintToDo(newTodo) {
  const newList = document.createElement('li')
  const newSpan = document.createElement('span');
  newList.appendChild(newSpan);
  newList.style.listStyleType = 'none'; //li 스타일제거
  newSpan.innerText = newTodo;
  todoList.appendChild(newList);
}
todoForm.addEventListener('submit', handleTodoForm);