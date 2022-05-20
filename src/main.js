import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./styles/global.css"
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')
