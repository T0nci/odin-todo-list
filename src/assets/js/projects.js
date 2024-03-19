function getProjects() {
  return projects.slice();
}


function createProject(title) {
  projects.push(title);
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