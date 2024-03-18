function showProjects(projects) {
  const projectsDiv = document.querySelector('.projects');
  projectsDiv.innerHTML = '';
  
  projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectButton = document.createElement('button');
    projectButton.classList.add('project-button');
    projectButton.textContent = project.title;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('icon-button');
    deleteButton.dataset.index = index;

    projectDiv.appendChild(projectButton);
    projectDiv.appendChild(deleteButton);
    projectsDiv.appendChild(projectDiv);
  });
}


const DOM = {
  showProjects,
};

export default DOM;