<script>
import { ref } from 'vue'

export default {
  props: {
    todo: { type: Object },
    onDelete: { type: Function },
    onCompleted: { type: Function }
  },
  setup(props) {
    const completed = ref(props.todo.completed)
    const checkStatus = () => {
      completed.value = !completed.value
      props.onCompleted(props.todo.id)
    }
    const deleteTodoItem = () => {
      props.onDelete(props.todo.id)
    }

    return {
      completed,
      checkStatus,
      deleteTodoItem
    }
  }
}
</script>
<template>
  <li :class="{ active: completed }">
    <p class="todo-item" @click="checkStatus">
      <span>{{ todo.text }}</span>
      <i>
        <font-awesome-icon icon="circle-check" />
      </i>
    </p>
    <div className="icon">
      <i>
        <font-awesome-icon icon="pen-to-square" />
      </i>
      <i @click="deleteTodoItem">
        <font-awesome-icon icon="trash-can" />
      </i>
    </div>
  </li>
</template>
<style>
li {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem 1rem;
  background: #161d30;
  border-left: 0.5rem solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0.5rem 0.5rem 0;
  border-left-color: #ee4343;
}
li .todo-item {
  width: 42rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
li.active {
  border-left-color: rgb(6, 170, 6);
  text-decoration: line-through;
}
li .todo-item i {
  color: #ee4343;
}
li.active .todo-item i {
  color: rgb(6, 170, 6);
}
li i {
  font-size: 1.2rem;
  cursor: pointer;
}
li .icon i:first-child {
  color: rgb(170, 165, 6);
  margin-right: 1rem;
}
li .icon i:last-child {
  color: #ee4343;
}
</style>
