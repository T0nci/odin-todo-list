import './assets/css/style.css';

import DOM from './assets/js/dom';
import projectModule from './assets/js/projects';


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


projectModule.createProject('HI1!');
projectModule.createProject('HI2!');
projectModule.createProject('HI3!');
projectModule.createProject('HI4!');
projectModule.createProject('HI5!');
projectModule.createProject('HI6!');
projectModule.createProject('HI7!');
renderProjects();