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


const projectModule = {
  getProjects,
  createProject,
};


const projects = [];
projects.push(new Project('Default'));

export default projectModule;