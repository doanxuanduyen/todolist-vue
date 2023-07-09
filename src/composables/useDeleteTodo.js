import { ref } from "vue";
import { saveTodos } from "./useTodo";

export function useDeleteTodo(todos) {
  const refreshTodos = ref(false);
  function setRefreshTodos(value) {
    refreshTodos.value = value;
  }
  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
    saveTodos(todos.value);
    setRefreshTodos(true)
  };

  return {
    deleteTodo,
    refreshTodos
  };
}
