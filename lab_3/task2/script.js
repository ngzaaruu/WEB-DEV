const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `task-${Date.now()}`;

  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.className = 'todo-text';
  label.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '×';
  deleteBtn.type = 'button';
  deleteBtn.setAttribute('aria-label', 'Delete task');

  li.append(checkbox, label, deleteBtn);
  todoList.appendChild(li);

  // Events
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed', checkbox.checked);
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateEmptyState();
  });
}

function updateEmptyState() {
  let emptyMsg = document.getElementById('empty-message');

  if (todoList.children.length === 0) {
    if (!emptyMsg) {
      emptyMsg = document.createElement('li');
      emptyMsg.id = 'empty-message';
      emptyMsg.className = 'empty-state';
      emptyMsg.textContent = 'No tasks yet. Add something to do!';
      todoList.appendChild(emptyMsg);
    }
  } else if (emptyMsg) {
    emptyMsg.remove();
  }
}

// Add new task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();

  if (text) {
    createTodoItem(text);
    input.value = '';
    input.focus();
    updateEmptyState();
  }
});

// Initial check
updateEmptyState();