<script setup>
import {onMounted, ref } from "vue";
import {getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import{ useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else{
      isLoggedIn.value = false;
    }
  });
});
const hanleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  })
};
import dashboardView from "./components/dashboardView.vue";
import navbarView from "./components/navbarView.vue";

</script>

<template>
  <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/feed"> Feed </router-link>
    <router-link to="/register"> Register </router-link>
    <router-link to="/sign-in"> Login </router-link>
    <button @click="handleSignOut" v-if="isLoggedIn"> Sign Out </button>
  </nav>
  <router-view />
  <div class="display">
    <navbar-view class="navbar" />
    <dashboard-view class="dashboard" />
  </div>
</template>

<style scoped></style>
