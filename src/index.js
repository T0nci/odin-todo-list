import './assets/css/style.css';

import DOM from './assets/js/dom';
import projectModule from './assets/js/projects';
import todoModule from './assets/js/todos';


// Interface for initializing the project
function initializeProject() {
  DOM.enableModals();
  listenForDialogSubmit();
  renderProjects();
}


// Interface for adding projects and todos
function listenForDialogSubmit() {
  // Listen for project submit
  const submitProjectDialog = document.querySelector(
    '#add-project button[type="submit"]'
  );

  submitProjectDialog.addEventListener('click', event => {
    event.preventDefault();

    const projectTitle = document.querySelector('#get-project-title').value;

    if (!projectModule.createProject(projectTitle)) {
      alert('Name already exists!');
      return;
    }

    document.querySelector('#add-project').close();
    document.querySelector('#add-project > form').reset();

    renderProjects(); // Reshow all projects
  });

  // Listen for todo submit
  const submitTodoDialog = document.querySelector(
    '#add-todo button[type="submit"]'
  );
  
  submitTodoDialog.addEventListener('click', event => {
    event.preventDefault();
  
    const project = document.querySelector('.active').textContent;
    if (!project) {
      document.querySelector('#add-todo').close();
      DOM.showTodos('You need to select a project!');
      return;
    }
  
    const todoTitle = document.querySelector('#get-todo-title').value;
    const todoDesc = document.querySelector('#get-todo-desc').value;
    const todoDate = document.querySelector('#get-todo-date').value;
    const todoPriority = document.querySelector('#get-todo-priority').value;
    const todoNotes = document.querySelector('#get-todo-notes').value;
    const todoChecklist = document.querySelector('#get-todo-checklist').value;
  
    document.querySelector('#add-todo > form').reset();
    document.querySelector('#add-todo').close();
  
    todoModule.createTodo(
      project,
      todoTitle,
      todoDesc,
      todoDate,
      todoPriority,
      todoNotes,
      todoChecklist,
    );
  
    renderTodos(project);
  });
}


// Interface for showing all projects and listening for clicks
function renderProjects() {
  console.table(projectModule.getProjects());
  console.table(todoModule.getAllTodos());
  const projects = projectModule.getProjects();
  DOM.showProjects(projects);

  document.querySelectorAll('.project > .icon-button').forEach(btn => {
    btn.addEventListener('click', event => {
      const project = event.currentTarget.parentNode.dataset.project;
      const activeProject = document.querySelector('.active');

      if (project === activeProject.textContent) {
        // If the project being deleted is active, empty the container
        activeProject.textContent = '';
        document.querySelector('.todos').textContent = '';
      }

      projectModule.deleteProject(project);
      // Delete all the todos in that project
      todoModule.getTodosFromProject(project).forEach(todo => {
        todoModule.deleteTodo(todo.todoIndex);
      });

      renderProjects(); // Reshow all projects
    });
  });

  document.querySelectorAll('.project > .project-button').forEach(btn => {
    btn.addEventListener('click', event => {
      const activeProject = document.querySelector('.active');
      const selectedProject = event.currentTarget.parentNode.dataset.project;

      activeProject.textContent = selectedProject;
      renderTodos(selectedProject);
    });
  });
}


// Interface for showing all todos and listening for clicks
function renderTodos(project) {  
  console.table(projectModule.getProjects());
  console.table(todoModule.getAllTodos());
  if (!projectModule.getProjects()) {
    DOM.showTodos('ERROR - NO TODOS');
    return;
  }

  DOM.showTodos(todoModule.getTodosFromProject(project));

  // document.querySelectorAll('todo').forEach(); // expand and delete, complete
  document.querySelectorAll('.checkbox').forEach(btn => {
    btn.addEventListener('click', event => {
      const todoIndex = parseInt(
        event.currentTarget.parentNode.parentNode.dataset.todoIndex
      ); // double parentNode to select iconsDiv instead of completeDiv

      todoModule.changeCompletionStatus(todoIndex);
    });
  });

  document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', event => {
      const project = document.querySelector('.active').textContent;
      const todoIndex = parseInt(
        event.currentTarget.parentNode.dataset.todoIndex
      );

      todoModule.deleteTodo(todoIndex);
      renderTodos(project);
    });
  });

  document.querySelectorAll('.expand').forEach(btn => {
    btn.addEventListener('click', event => {
      const todoIndex = event.currentTarget.parentNode.dataset.todoIndex;
      const todoInfo = todoModule.getTodo(todoIndex);

      DOM.expandTodo(todoIndex, todoInfo);
    });
  });
}


initializeProject();