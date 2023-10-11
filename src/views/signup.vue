<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router' 
const email = ref('')
const password = ref('')

const router = useRouter() 
const register = () => {
    createUserWithEmailAndPassword(getAuth(),email.value, password.value) 
    .then((data) => {
      console.log('Successfully registered!');
      router.push('/feed') 
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message);
    });
}

</script>

<template>
    <h1 class=" text-slate-50"> Create an Account </h1>
    <p> <input type='text' placeholder="Email" class="  bg-slate-50" v-model='email'/> </p>
    <p> <input type='password' placeholder="Password" class="  bg-slate-50" v-model='password'/> </p>
    <p> <button class=" text-slate-50" @click="register"> singup </button> </p>
</template>

