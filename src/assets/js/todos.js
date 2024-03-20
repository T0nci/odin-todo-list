class Todo {
  constructor(project, title, desc, dueDate, priority, notes, checklist) {
    this.project = project;
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}


function getAllTodos() { // For testing purposes
  return todos.slice();
}


function getTodosFromProject(project) {
  const todosFromProject = [];
  // Slice so we don't modify the actual todos, include todoIndex alongside
  // project for info about deletion, expansion and modification
  todos.slice().forEach((todo, todoIndex) => {
    if (todo.project === project) {
      todo.todoIndex = todoIndex;
      todosFromProject.push(todo);
    }
  });
  return todosFromProject;
};


function createTodo(project, title, desc, dueDate, priority, notes, checklist) {
  todos.push(
    new Todo(project, title, desc, dueDate, priority, notes, checklist)
  );
}


function deleteTodo(index) {
  todos.splice(index, 1);
}


const todoModule = {
  getAllTodos,
  getTodosFromProject,
  createTodo,
  deleteTodo,
};

const todos = [];
createTodo('Default', 'Default Todo', '/', '2069-12-31', 'low', '/', '/');

export default todoModule;