import { ref, watch, onMounted } from "vue";
import { saveTodos } from "./useTodo";
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export function useAddTodo(todos, newTodo) {
  const $toast = useToast();
  const currentDate = ref(new Date());

  const addTodo = (newDate) => {
    console.log(newDate);
    if (newTodo.value.trim() !== '') {
      const todo = {
        id: Date.now(),
        completed: false,
        text: newTodo.value,
        due: newDate
      };
      todos.value.push(todo);
      saveTodos(todos.value);
      newTodo.value = '';
    }
  };

  // watch(currentDate, (newCurrentDate) => {
  //   todos.value.forEach((todo) => {
  //     if (newCurrentDate.toDateString() === todo.due.toDateString()) {
  //       // $toast.warning(`You need to do ${todo.text}`);
  //       console.log(123);
  //     }
  //     else{
  //       console.log(newCurrentDate + ' va ' + todo.due);
  //     }
  //   });
  // });

  // onMounted(() => {
  //   setInterval(() => {
  //     currentDate.value = new Date();
  //   }, 1000);
  // });

  return {
    addTodo
  };
}
