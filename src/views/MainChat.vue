<script setup>
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'

const router = useRouter()
const authListener = onAuthStateChanged(getAuth(),function(user) {
    if (!user) { // not logged in
        alert('you must be logged in to view this. redirecting to the home page')
        router.push('/')
    }
});

onBeforeUnmount(() => {
    // clear up listener
    authListener()
})
  

import dashboardView from "../components/dashboardView.vue";
import navbarView from "../components/navbarView.vue";
</script>

<template>
  <div class="display">
    <navbar-view class="navbar" />
    <dashboard-view class="dashboard" />
  </div>
</template>

<style scoped></style>
