import './assets/css/style.css';

import DOM from './assets/js/dom';
import projectModule from './assets/js/projects';


// Interface for initializing the project
function initializeProject() {
  DOM.initializeModals();
  renderProjects();
}

// Interface for showing all projects
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