import "./assets/style.css"
import { createApp } from 'vue'
import App from './App.vue'
import PhosphorIcons from "@phosphor-icons/vue"

let app = createApp(App)
initializeApp(firebaseConfig);

app.use(PhosphorIcons)

app.mount('#app')// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  ap
// // import "./assets/style.scss"
// import { createApp } from 'vue'
// import App from './App.vue'
// import PhosphorIcons from "@phosphor-icons/vue"

// createApp(App).mount('#app')
// App.use(PhosphorIcons)
