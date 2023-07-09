import { ref } from "vue";
import { saveTodos } from "./useTodo";

export function useCompleted(todos) {
  const refreshCompleted = ref(false);
  function setRefreshCompleted(value) {
    refreshCompleted.value = value;
  }
  const handleCompletion = (id) => {
    const todoToUpdate = todos.value.find(todo => todo.id === id)
    if (todoToUpdate) {
      todoToUpdate.completed = !todoToUpdate.completed
      todos.value = [...todos.value]
      setRefreshCompleted(true)
    }
    saveTodos(todos.value)
  }
  return {
    handleCompletion,
    refreshCompleted
  };
}
