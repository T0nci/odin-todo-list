function initializeModals() {
  enableModals();
  // listenForSubmit();
}


function enableModals() {
  const dialogs = document.querySelectorAll('dialog');

  // Enable showing modals
  const showModalButtons = document.querySelectorAll('.headline > .icon-button');

  showModalButtons[0].addEventListener('click', () => {
    dialogs[0].showModal();
  });
  showModalButtons[1].addEventListener('click', () => {
    dialogs[1].showModal();
  });

  // Enable closing modals
  const closeModalButtons = document.querySelectorAll('.utility > .icon-button');

  closeModalButtons[0].addEventListener('click', () => {
    dialogs[0].close();
  });
  closeModalButtons[1].addEventListener('click', () => {
    dialogs[1].close();
  });
}


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
  initializeModals,
  showProjects,
};

export default DOM;