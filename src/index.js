import './assets/css/style.css';

import DOM from './assets/js/dom';
import projectModule from './assets/js/projects';
import todoModule from './assets/js/todos';


// Interface for initializing the project
function initializeProject() {
  DOM.enableModals();
  listenForDialogSubmit();
  renderPage();
}


// Interface for adding projects and todos
function listenForDialogSubmit() {
  // Listen for project submit
  const submitProjectDialog = document.querySelector(
    '#add-project button[type="submit"]'
  );

  submitProjectDialog.addEventListener('click', event => {
    event.preventDefault();

    const projectTitle = document.querySelector('#get-project-title').value;

    document.querySelector('#add-project > form').reset();
    document.querySelector('#add-project').close();

    projectModule.createProject(projectTitle);
    renderProjects(); // Reshow all projects
  });

  // Listen for todo submit
  // ...
}


// Interface for rendering the page for the first time
function renderPage() {
  renderProjects();
  // renderTodos();
}


// Interface for showing all projects and listening for clicks
function renderProjects() {
  const projects = projectModule.getProjects();
  DOM.showProjects(projects);
  console.log({projects: projectModule.getProjects(), todos: todoModule.getAllTodos()});

  document.querySelectorAll('.project > .icon-button').forEach(btn => {
    btn.addEventListener('click', event => {
      const index = parseInt(event.currentTarget.parentNode.dataset.index);

      if (btn.classList.contains('active')) {
        // If the project being deleted is active, empty the container
        document.querySelector('.todos').textContent = '';
      }

      projectModule.deleteProject(index);
      // Delete all the todos in that project
      todoModule.getTodosFromProject(index).forEach(todo => {
        todoModule.deleteTodo(todo.todoIndex);
      });

      renderProjects(); // Reshow all projects
    });
  });

  document.querySelectorAll('.project > .project-button').forEach(btn => {
    btn.addEventListener('click', event => {
      // Place the active class on the correct project
      const activeProject = document.querySelector('active');
      if (activeProject) activeProject.classList.remove('active');

      btn.classList.add('active');

      const index = parseInt(event.currentTarget.parentNode.dataset.index);
      renderTodos(index);
    });
  });
}


// Interface for showing all todos and listening for clicks
function renderTodos(index) {
  if (!projectModule.getProjects()) {
    DOM.showTodos('ERROR - NO TODOS');
    return;
  }

  if (!index) {
    DOM.showTodos(todoModule.getTodosFromProject(0));
  } else {
    DOM.showTodos(todoModule.getTodosFromProject(index));
  }

  // document.querySelectorAll('todo').forEach(); // expand and delete
  document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', event => {
      const todoIndex = parseInt(
        document.querySelector('.active').parentNode.dataset.index
      );
      const projectIndex = parseInt(
        event.currentTarget.parentNode.dataset.projectIndex
      );

      todoModule.deleteTodo(todoIndex);
      renderTodos(projectIndex);
    });
  })
}


initializeProject();