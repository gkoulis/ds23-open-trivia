<script setup>
import { useApplicationStore } from '@/stores/application.js';
import Stat from '@/components/Stat.vue';
const store = useApplicationStore();
</script>

<template>
  <div class="container text-center">
    <h1>Stats</h1>
  </div>
  <div class="container">
    <Stat :text="'Questions'" :count="store.questions" />
    <Stat :text="'Answered'" :count="store.answered" />
    <Stat :text="'Correct Answers'" :count="store.correct" />
    <Stat :text="'Incorrect Answers'" :count="store.incorrect" />
  </div>
</template>

<style></style>
