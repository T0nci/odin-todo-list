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


function getTodosFromProject(index) {
  return todos.filter(todo => todo.project === index);
};


function createTodo(project, title, desc, dueDate, priority, notes, checklist) {
  todos.push(new Todo(project, title, desc, dueDate, priority, notes, checklist));
}


const todoModule = {
  getTodosFromProject,
  createTodo,
};

const todos = [];
createTodo(0, 'Default Todo', '/', '2069-12-31', 'low', '/', '/');

export default todoModule;