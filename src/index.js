import './assets/css/style.css';

import DOM from './assets/js/dom';
import projectModule from './assets/js/projects';


// Interface for initializing the project
function initializeProject() {
  DOM.enableModals();
  listenForSubmit();
  renderProjects();
}


// Interface for adding projects and todos
function listenForSubmit() {
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
    renderProjects();
  });

  // Listen for todo submit
  // ...
}


// Interface for showing all projects + listening for delete
function renderProjects() {
  const projects = projectModule.getProjects();

  DOM.showProjects(projects);

  document.querySelectorAll('.project > .icon-button').forEach(btn => {
    btn.addEventListener('click', event => {
      const index = event.currentTarget.dataset.index;
      projectModule.deleteProject(index);
      renderProjects();
    });
  });
}


initializeProject();