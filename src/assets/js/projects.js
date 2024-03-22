function getProjects() {
  return projects.slice();
}


function createProject(title) {
  if (projects.includes(title)) return false;
  projects.push(title);
  store();
  return true;
}


function deleteProject(title) {
  projects.splice(projects.indexOf(title), 1);
  store();
}


const projectModule = {
  getProjects,
  createProject,
  deleteProject,
};


function store() {
  localStorage.setItem('projects', JSON.stringify(projects));
}


function createProjectsArray() {
  if (localStorage.getItem('projects')) {
    return JSON.parse(localStorage.getItem('projects'));
  } else {
    return ["Default", ];
  }
}


const projects = createProjectsArray();
store();
// It's essential to call it in both modules(todos and projects) because when
// deleting a project it's fine since it deletes the todos of it as well, but 
// deleting a todo from "Default" project which won't be saved causes "Default"
// to keep appearing upon refreshes even if it's saved or not

export default projectModule;