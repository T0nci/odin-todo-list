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

    const projectTitle = document.querySelector(
      '#add-project #get-project-title'
    ).value;

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
  renderTodos();
}


// Interface for showing all projects and listening for clicks
function renderProjects() {
  const projects = projectModule.getProjects();
  DOM.showProjects(projects);

  document.querySelectorAll('.project > .icon-button').forEach(btn => {
    btn.addEventListener('click', event => {
      const index = parseInt(event.currentTarget.parentNode.dataset.index);
      projectModule.deleteProject(index);
      renderProjects(); // Reshow all projects
    });
  });

  document.querySelectorAll('.project > .project-button').forEach(btn => {
    btn.addEventListener('click', event => {
      const index = parseInt(event.currentTarget.parentNode.dataset.index);
      renderTodos(index);
    });
  });
}


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
}


initializeProject();