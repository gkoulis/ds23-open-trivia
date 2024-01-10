<script setup>
import { ref } from 'vue';
import { useApplicationStore } from '@/stores/application.js';

const props = defineProps({
  question: Object
});

const emit = defineEmits(['questionAnswered']);

const store = useApplicationStore();

const answered = ref(false);
const answeredCorrectly = ref(false);

const onAnswer = (userAnswer) => {
  if (userAnswer === props.question.correct_answer) {
    store.incrAnswered(true);
    answeredCorrectly.value = true;
  } else {
    store.incrAnswered(false);
    answeredCorrectly.value = false;
  }

  answered.value = true;

  setTimeout(function () {
    emit('questionAnswered');
  }, 4000);
};

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
}
</script>

<template>
  <div class="game">
    <div class="result text-center" v-if="answered">
      <p v-if="answeredCorrectly">Your answer is <strong>correct</strong>! ✅ 👍</p>
      <p v-else>Your answer is <strong>incorrect</strong>! ❌ 🤡</p>
    </div>
    <div v-else>
      <p>Category: {{ question.category }}</p>
      <p>Difficulty: {{ question.difficulty }}</p>
      <h1>{{ htmlDecode(question.question) }}</h1>
      <button class="btn-full mt-1" @click="onAnswer('True')">True</button>
      <button class="btn-full mt-1" @click="onAnswer('False')">False</button>
    </div>
  </div>
</template>

<style>
.game {
  background-color: aliceblue;
  padding: 1em;
}
.game .result p {
  font-size: 2em;
}
</style>
