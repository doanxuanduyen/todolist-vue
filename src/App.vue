<script setup>
import TodoList from './components/Todolist.vue'
</script>

<template>
  <div class="container">
    <header id="#header">
      <h1 :style="{ fontSize: '4rem', fontWeight: '600' }">To do list</h1>
    </header>
    <todo-list/>
  </div>
</template>

<style>
body .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9ca3af;
  font-family: 'Inter', sans-serif;
  width: 50rem;
}
header{
  margin-bottom: 2rem;
  margin-top: 5rem;
}
@media only screen and (max-width: 425px) {
  body .container{
    width: 20rem;
  }
}
</style>
