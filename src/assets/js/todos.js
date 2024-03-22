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
  // structuredClone() so we don't modify the actual todos, include todoIndex 
  // alongside project for info about deletion, expansion and modification
  const todosFromProject = []
  todos.forEach((todo, todoIndex) => {
    if (todo.project === project) {
      const newTodo = structuredClone(todo);
      newTodo.todoIndex = todoIndex;
      todosFromProject.push(newTodo);
    }
  });
  console.log(todosFromProject);
  return todosFromProject;
};


function createTodo(project, title, desc, dueDate, priority, notes) {
  todos.push(
    new Todo(project, title, desc, dueDate, priority, notes)
  );
}


function deleteTodo(index) {
  todos.splice(index, 1);
}


function changeCompletionStatus(index) {
  if (todos[index].complete === false) {
    todos[index].complete = true;
  } else {
    todos[index].complete = false;
  }
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

const todos = [];
createTodo('Default', 'Default Todo', '/', '2069-12-31', 'low', '/', '/');

export default todoModule;