import PhosphorIcons from "@phosphor-icons/vue"
import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css"
import router from "./router"
import './index.css'

const firebaseConfig = {
    apiKey: "AIzaSyC-DJZSt8y6B68PLPzGSBj8h0-go8iB3rc",
    authDomain: "hackathon-chatbot-3bc0b.firebaseapp.com",
    projectId: "hackathon-chatbot-3bc0b",
    storageBucket: "hackathon-chatbot-3bc0b.appspot.com",
    messagingSenderId: "873775146381",
    appId: "1:873775146381:web:2a0422803e7eed6fd9c9c4",
    measurementId: "G-RS0HNRZMD7"
  };

initializeApp(firebaseConfig);

if (location.hostname === "localhost") {
  connectAuthEmulator(getAuth(), "http://localhost:9099");
}

const app = createApp(App)

app.use(PhosphorIcons)
app.use(router)

app.mount('#app')
// // import "./assets/style.scss"
// import { createApp } from 'vue'
// import App from './App.vue'
// import PhosphorIcons from "@phosphor-icons/vue"

// createApp(App).mount('#app')
// App.use(PhosphorIcons)
