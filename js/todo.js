const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

function handleTodoForm(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  todoInput.focus();
  const newList = document.createElement('li')
  newList.style.listStyleType = 'none'; //li 스타일제거
  newList.innerText = newTodo;
  
  todoList.append(newList);
}

todoForm.addEventListener('submit', handleTodoForm);