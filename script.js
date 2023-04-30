const form = document.querySelector('#add-task-form');
const taskNameInput = document.querySelector('#task-name');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskName = taskNameInput.value;
  if (taskName) {
    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    const deleteButton = document.createElement('button');
    taskText.textContent = taskName;
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskNameInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    const taskItem = event.target.closest('li');
    taskList.removeChild(taskItem);
  }
});
