export function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function getTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
