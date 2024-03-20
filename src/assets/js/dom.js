function enableModals() {
  const projectDialog = document.querySelector('#add-project');
  const todoDialog = document.querySelector('#add-todo');

  // Enable showing modals
  const showProjectDialog = document.querySelector('#show-add-project');
  const showTodoDialog = document.querySelector('#show-add-todo');

  showProjectDialog.addEventListener('click', () => {
    projectDialog.showModal();
  });
  showTodoDialog.addEventListener('click', () => {
    todoDialog.showModal();
  });

  // Enable closing modals
  const closeProjectDialog = document.querySelector('#close-add-project');
  const closeTodoDialog = document.querySelector('#close-add-todo');

  closeProjectDialog.addEventListener('click', () => {
    projectDialog.close();
  });
  closeTodoDialog.addEventListener('click', () => {
    todoDialog.close();
  });
}


function showProjects(projects) {
  const projectsDiv = document.querySelector('.projects');
  projectsDiv.textContent = ''; // ensure div is empty every rendering

  projects.forEach((project) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.dataset.project = project; // info for deletion

    const projectButton = document.createElement('button');
    projectButton.classList.add('project-button');
    projectButton.textContent = project;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('icon-button');

    projectDiv.appendChild(projectButton);
    projectDiv.appendChild(deleteButton);
    projectsDiv.appendChild(projectDiv);
  });
}


function showTodos(todos) {
  const todosDiv = document.querySelector('.todos');
  todosDiv.textContent = '';

  if (typeof todos === 'string') {
    todosDiv.textContent = todos;
    return;
  }

  todos.forEach(todo => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    switch (todo.priority) {
      case 'high':
        todoDiv.style.backgroundColor = '#FFB6C1';
        todoDiv.style.border = '5px solid red';
        break;
      case 'medium':
        todoDiv.style.backgroundColor = '#FFFFE0';
        todoDiv.style.border = '5px solid yellow';
        break;
      case 'low':
        todoDiv.style.backgroundColor = '#90EE90';
        todoDiv.style.border = '5px solid green';
        break;
      default:
        todoDiv.style.backgroundColor = '#90EE90';
    }

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;

    const todoDueDate = document.createElement('div');
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.textContent = `Due Date: ${todo.dueDate}`;

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('todo-icons');
    iconsDiv.dataset.todoIndex = todo.todoIndex; // Info for delete, expand, modify, complete

    const completeButton = document.createElement('input');
    completeButton.setAttribute('type', 'checkbox');
    completeButton.classList.add('checkbox');
    if (todo.complete) completeButton.checked = true;
    const completeDiv = document.createElement('div');
    completeDiv.classList.add('complete');
    completeDiv.textContent = 'Complete:';
    completeDiv.appendChild(completeButton);
    iconsDiv.appendChild(completeDiv);

    const expandIcon = document.createElement('button');
    expandIcon.classList.add('icon-button');
    expandIcon.classList.add('expand');
    iconsDiv.appendChild(expandIcon);

    const deleteIcon = document.createElement('button');
    deleteIcon.classList.add('icon-button');
    deleteIcon.classList.add('delete');
    iconsDiv.appendChild(deleteIcon);

    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoDueDate);
    todoDiv.appendChild(iconsDiv);

    todosDiv.appendChild(todoDiv);
  });
}


const DOM = {
  enableModals,
  showProjects,
  showTodos,
};

export default DOM;