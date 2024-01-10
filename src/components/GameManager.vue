<script setup>
import { ref, computed, onMounted } from 'vue';
import { useApplicationStore } from '@/stores/application.js';
import Game from '@/components/Game.vue';

const store = useApplicationStore();

const loading = ref(false);
const question = ref(null);
const error = ref(null);

const fetchQuestion = () => {
  loading.value = true;
  question.value = null;
  error.value = null;
  return fetch('https://opentdb.com/api.php?amount=1&category=18&type=boolean')
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.response_code === 0) {
        question.value = responseData;
        return Promise.resolve();
      } else if (responseData.response_code === 5) {
        question.value = null;
        error.value = 'too many requests! please try again later!';
        return Promise.reject('too many requests!');
      } else {
        question.value = null;
        error.value = 'undefined error: ' + responseData.response_code;
        return Promise.reject('undefined error');
      }
    })
    .catch((err) => {
      error.value = err;
      return Promise.reject(err);
    })
    .finally(() => {
      loading.value = false;
    });
};

const onNextQuestion = () => {
  fetchQuestion()
    .then(() => {
      store.incrQuestions();
    })
    .catch((ignored) => {
      console.warn('skip failed');
    });
};

onMounted(() => {
  // fetchQuestion();
});
</script>

<template>
  <div class="game-manager">
    <div class="text-center" v-if="loading">
      <p>Loading...</p>
    </div>

    <div class="text-center" v-if="error">
      <pre>{{ error }}</pre>
    </div>

    <div v-if="!loading && question !== null && question?.response_code === 0 && error === null">
      <Game :question="question.results[0]" @question-answered="onNextQuestion" />
    </div>

    <button class="btn-full mt-1" @click="onNextQuestion">
      {{ question === null ? "let's play" : 'skip' }}
    </button>
  </div>
</template>

<style>
.game-manager {
  padding: 1em;
  background-color: pink;
}
</style>
