<script setup>
import dashboardView from "./components/dashboardView.vue";
import navbarView from "./components/navbarView.vue";
console.log(import.meta.env.VITE_OPENAI_API_KEY);
</script>

<template>
  <div class="display">
    <navbar-view class="navbar" />
    <dashboard-view class="dashboard" />
  </div>
</template>

<style scoped></style>
