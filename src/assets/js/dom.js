function initializeModals() {
  enableModals();
  // listenForSubmit();
}


function enableModals() {
  const dialogsForCreating = document.querySelectorAll('dialog.create');

  // Enable showing modals
  const showModalButtons = document.querySelectorAll('.headline > .icon-button.add');

  showModalButtons[0].addEventListener('click', () => {
    dialogsForCreating[0].showModal();
  });
  showModalButtons[1].addEventListener('click', () => {
    dialogsForCreating[1].showModal();
  });

  // Enable closing modals
  const closeModalButtons = document.querySelectorAll('.utility > .icon-button.close');

  closeModalButtons[0].addEventListener('click', () => {
    dialogsForCreating[0].close();
  });
  closeModalButtons[1].addEventListener('click', () => {
    dialogsForCreating[1].close();
  });
}


function showProjects(projects) {
  const projectsDiv = document.querySelector('.projects');
  projectsDiv.textContent = ''; // ensure div is empty every rendering

  projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectButton = document.createElement('button');
    projectButton.classList.add('project-button');
    projectButton.textContent = project.title;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('icon-button');
    deleteButton.dataset.index = index; // info for deletion

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