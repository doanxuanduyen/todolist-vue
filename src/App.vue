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
body{
  display: flex;
  justify-content: center;
}
body .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9ca3af;
  font-family: 'Inter', sans-serif;
}
header{
  margin-bottom: 2rem;
  margin-top: 5rem;
}

</style>
