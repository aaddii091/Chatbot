<template>
  <div>
    <nav>
      <router-link to="/" class=" text-slate-50"> Home </router-link> |
      <span> 
        <router-link to="/chat" class=" text-slate-50"> Chat Page </router-link> |
      </span>
      <span v-if="isLoggedIn"> 
        <button @click="handleSignOut" class="text-slate-50"> Logout </button> 
      </span>
      <span v-else>
        <router-link to="/signup" class=" text-slate-50"> Signup </router-link> |
      </span>
      
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue' // used for conditional rendering
import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoggedIn = ref(true)

// runs after firebase is initialized
onAuthStateChanged(getAuth(),function(user) {
    if (user) {
      isLoggedIn.value = true // if we have a user
    } else {
      isLoggedIn.value = false // if we do not
    }
})

const handleSignOut = () => {
  signOut(getAuth())
  router.push('/')
}
</script>

<style scoped>

</style>