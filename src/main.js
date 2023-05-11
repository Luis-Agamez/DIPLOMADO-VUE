import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
// Importa el maneojo de las rutas
import router from './router'

// Crea una aplicación VUE
const app = createApp(App)

app.use(router)

app.mount('#app')
