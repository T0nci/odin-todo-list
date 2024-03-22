class Todo {
  constructor(project, title, desc, dueDate, priority, notes) {
    this.project = project;
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.complete = false;
  }
}


function getAllTodos() { // For testing purposes
  return todos.slice();
}


function getTodosFromProject(project) {
  // JSON built-in object, so we modify the deep clones, include todoIndex 
  // alongside project for info about deletion, expansion and modification
  const todosFromProject = [];
  todos.forEach((todo, todoIndex) => {
    if (todo.project === project) {
      const newTodo = JSON.parse(JSON.stringify(todo));
      newTodo.todoIndex = todoIndex;
      todosFromProject.push(newTodo);
    }
  });
  return todosFromProject;
};


function createTodo(project, title, desc, dueDate, priority, notes) {
  todos.push(
    new Todo(project, title, desc, dueDate, priority, notes)
  );
  store();
}


function deleteTodo(index) {
  todos.splice(index, 1);
  store();
}


function changeCompletionStatus(index) {
  if (todos[index].complete === false) {
    todos[index].complete = true;
  } else {
    todos[index].complete = false;
  }
  store();
}


function getTodo(index) {
  return structuredClone(todos[index]);
}


function editTodo(todoIndex, title, desc, date, priority, notes) {
  const todo = todos[todoIndex];
  todo.title = title;
  todo.description = desc;
  todo.dueDate = date;
  todo.priority = priority;
  todo.notes = notes;
  store();
}


const todoModule = {
  getAllTodos,
  getTodosFromProject,
  createTodo,
  deleteTodo,
  changeCompletionStatus,
  getTodo,
  editTodo,
};


function store() {
  localStorage.setItem('todos', JSON.stringify(todos));
}


function createTodosArray() {
  if (localStorage.getItem('todos')) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [
      new Todo("Default", "Default Todo", "/", "2069-12-31", "low", "/"),
    ];
  }
}


const todos = createTodosArray();
store();
// It's essential to call it in both modules(todos and projects) because when
// deleting a project it's fine since it deletes the todos of it as well, but 
// deleting a todo from "Default" project which won't be saved causes "Default"
// to keep appearing upon refreshes even if it's saved or not

export default todoModule;