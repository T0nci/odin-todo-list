import './assets/css/style.css';

import DOM from './assets/js/dom';
import projectModule from './assets/js/projects';


// Interface for showing all projects
function renderProjects() {
  const projects = projectModule.getProjects();

  DOM.showProjects(projects);
}


projectModule.createProject('HI!');
projectModule.createProject('HI!');
projectModule.createProject('HI!');
projectModule.createProject('HI!');
projectModule.createProject('HI!');
projectModule.createProject('HI!');
projectModule.createProject('HI!');
renderProjects();