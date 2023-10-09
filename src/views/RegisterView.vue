 <template>
    <h1> Create an account</h1>
    <p><input type="text" placeholder="Email" /></p>
    <p><input type="password" placeholder="Password" /></p>
    <p><button @click="register">Submit</button></p>
 </template>

 <script setup>
import {ref} from "vue";
import{getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useRouter } from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter()
const register = () => {
     createUserWIthEmailAndPassword(getAuth(), email.value, password.value)
     .then((data) => {
        console.log("Successfully registered!");
        router.push('/feed')
     })
     .catch((error) => {
        console.log(error.code);
        alert(error.message);
     })
};

const signInWithGoogle = () => {
     const provider = new GoogleAuthProvider();
     signInWithPopup(getAuth(),provider)
     .then((result) => {
        console.log(result.user);
        router.push("/feed");
     })
     .catch((error) => {
        
     });
};
</script>