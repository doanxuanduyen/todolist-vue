<script>
import { ref, watch } from 'vue'
import TodoItem from './TodolistItem.vue'
import { useAddTodo } from '../composables/useAddTodo'
import { getTodos, saveTodos } from '../composables/useTodo'
import { useDeleteTodo } from '../composables/useDeleteTodo'
import { useCompleted } from '../composables/useCompleted'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: {
    TodoItem,
    VueDatePicker
  },
  setup() {
    const newTodo = ref('')
    const todos = ref(getTodos())
    const { deleteTodo, refreshTodos } = useDeleteTodo(todos)
    const { handleCompletion, refreshCompleted } = useCompleted(todos)
    const dateSelected = ref(new Date())
    const date = ref()
    const checkCalendar = () => {
      watch(date, (newDate) => {
        if (newDate !== undefined) {
          addTodo(newDate)
        }
      })
    }
    watch(refreshCompleted, (newValue) => {
      if (newValue) {
        getTodos()
        refreshCompleted.value = false
      }
    })
    watch(refreshTodos, (newValue) => {
      if (newValue) {
        getTodos()
        refreshTodos.value = false
      }
    })
    const { addTodo } = useAddTodo(todos, newTodo, checkCalendar)
    return {
      newTodo,
      todos,
      addTodo,
      deleteTodo,
      handleCompletion,
      dateSelected,
      date
    }
  }
}
</script>
<template>
  <main id="main">
    <div class="input">
      <button class="btn" type="button">
        <VueDatePicker v-model="date" enable-second></VueDatePicker>
      </button>
      <input
        type="text"
        id="input"
        placeholder="Add a new task"
        :value="newTodo"
        @input="newTodo = $event.target.value"
        @keyup.enter="addTodo"
      />
      <button class="btn" type="button" @click="addTodo">
        <font-awesome-icon icon="add" />
      </button>
    </div>
    <ul>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="typeof todo === 'object' ? todo : {}"
        :onDelete="deleteTodo"
        :onCompleted="handleCompletion"
      />
    </ul>
  </main>
</template>

<style>
main {
  position: relative;
}
main#main .input {
  position: inherit;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #1e293b;
  border-bottom: 0.2rem solid #0f172a;
  width: 50rem;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
}

main#main .input input {
  border: none;
  outline: none;
  background: #1e293b;
  color: rgb(156, 163, 175);
  padding: 2.5rem;
  width: 90%;
  font-size: 1.2rem;
}
main#main .input .btn {
  background: #1e293b;
  color: rgb(156, 163, 175);
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 2rem;
}

main#main .input .btn div input.dp__pointer {
  display: none;
}
main#main .input .btn div svg.dp__clear_icon {
  display: none;
}
main#main .input .btn div .dp__menu {
  top: 19px !important;
  left: 17px !important;
}
ul {
  position: inherit;
  padding: 0;
  height: 50rem;
  overflow-y: overlay;
}
::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--white);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 0.3rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}
@media (max-width: 535px) {
  main {
    width: 32rem;
  }
  main#main .input {
    width: 95%;
  }
  ul {
    width: 95%;
  }
}
</style>
