import { ref, watch, onMounted } from "vue";
import { saveTodos } from "./useTodo";
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export function useAddTodo(todos, newTodo) {
  const $toast = useToast();
  const currentDate = ref(new Date());

  const addTodo = (newDate) => {
    const dueDate = new Date(newDate);
    if (newTodo.value.trim() !== '') {
      const todo = {
        id: Date.now(),
        completed: false,
        text: newTodo.value,
        due: dueDate
      };
      todos.value.push(todo);
      saveTodos(todos.value);
      newTodo.value = '';
    }
  };

  watch(currentDate, (newCurrentDate) => {
    todos.value.forEach((todo) => {
      if (newCurrentDate.getTime() === todo.due.getTime()) {
        // $toast.warning(`You need to do ${todo.text}`);
        console.log(123);
      }
      else{
        console.log(newCurrentDate + ' va ' + todo.due);
      }
    });
  });

  onMounted(() => {
    setInterval(() => {
      currentDate.value = new Date();
    }, 1000);
  });

  return {
    addTodo
  };
}
