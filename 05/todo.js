const submitButton = document.querySelector('#submit');
const todoInput = document.querySelector('#todoText');
const todoContainer = document.querySelector('#todos');

// console.log(submitButton);

submitButton.addEventListener('click', function () {
  // console.log('clicked!');
  // console.log(todoInput.value);
  const pEl = document.createElement('p');
  pEl.textContent = todoInput.value;
  todoContainer.appendChild(pEl);
  todoInput.value = '';
});
