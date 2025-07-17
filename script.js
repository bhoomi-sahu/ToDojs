const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const leftDiv = document.createElement('div');
  leftDiv.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = function () {
    span.classList.toggle('completed');
  };

  const span = document.createElement('span');
  span.innerText = taskText;

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = '';
}

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});
