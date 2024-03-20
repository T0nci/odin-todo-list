function getProjects() {
  return projects.slice();
}


function createProject(title) {
  if (projects.includes(title)) return false;
  projects.push(title);
  return true;
}


function deleteProject(title) {
  projects.splice(projects.indexOf(title), 1);
}


const projectModule = {
  getProjects,
  createProject,
  deleteProject,
};

const projects = [];
createProject('Default');

export default projectModule;