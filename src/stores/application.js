import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useApplicationStore = defineStore('application', () => {
  const name = ref('anonymous');
  const questions = ref(0);
  const answered = ref(0);
  const correct = ref(0);
  const incorrect = computed(() => {
    return answered.value - correct.value;
  });

  const incrQuestions = () => {
    questions.value = questions.value + 1;
  };
  const incrAnswered = (isCorrect) => {
    answered.value = answered.value + 1;
    if (isCorrect === true) {
      correct.value = correct.value + 1;
    }
  };

  return { name, questions, answered, correct, incorrect, incrQuestions, incrAnswered };
});
