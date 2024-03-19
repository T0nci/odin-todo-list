class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
}


function getProjects() {
  return projects.slice();
}


function createProject(title) {
  projects.push(new Project(title));
}


function deleteProject(index) {
  projects.splice(index, 1);
}


const projectModule = {
  getProjects,
  createProject,
  deleteProject,
};

const projects = [];
createProject('Default');

export default projectModule;