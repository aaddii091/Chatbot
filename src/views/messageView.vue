<template>
  <div class="message_container">
    <h1>{{ props.message }}</h1>
  </div>
</template>

<script setup>
const props = defineProps(["message"]);
</script>

<style scoped>
* {
  background: var(--background1);
}
.message_container {
  width: calc(100vw - 20rem);
  color: var(--text);
  border-radius: 25px;
  height: auto;
  border-radius: 25px;
}
h1 {
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  font-weight: 400;
}
</style>
