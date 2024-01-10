<script setup>
import { useApplicationStore } from '@/stores/application.js';
const store = useApplicationStore();
</script>

<template>
  <div class="container text-center">
    <h1>Play</h1>
  </div>
  <div class="container">
    <label>Your name</label>
    <input v-model="store.name" />
  </div>
</template>

<style scoped>
input {
  padding: 1em 1em 0.2em 0.2em;
  border: 0;
  border-bottom: 2px dashed gray;
  margin-left: 1em;
  background-color: transparent;
}
</style>
