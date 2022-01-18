const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

function handleTodoForm(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  todoInput.focus();
  todoList.append(newTodo, document.createElement('br'));
}

todoForm.addEventListener('submit', handleTodoForm);