<script setup>
const props = defineProps({
  text: String,
  count: Number
});
</script>

<template>
  <div class="stat">
    <p class="count">{{ props.count }}</p>
    <p class="text">{{ props.text }}</p>
  </div>
</template>

<style scoped>
.stat {
  text-align: center;
}
.count {
  font-size: 28px;
  margin: 0;
}
.text {
  font-size: 18px;
  margin: 0 0 2em 0;
}
</style>
