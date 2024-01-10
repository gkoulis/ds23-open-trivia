<script setup>
import { RouterLink } from 'vue-router';
import { useApplicationStore } from '@/stores/application.js';

const store = useApplicationStore();
</script>

<template>
  <header class="container text-center">
    <div class="logo">
      <h1>
        Open Trivia <span>{{ store.name }}</span>
      </h1>
    </div>
    <div class="menu">
      <router-link to="/">Play!</router-link>
      <router-link to="/stats">Stats</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
  </header>
</template>

<style>
header {
  background-color: whitesmoke;
}
header .logo h1 span {
  font-size: 18px;
  font-weight: bold;
  color: blue;
}
header .menu > * {
  margin-right: 1em;
}
</style>
