import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { routes } from './routes'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);
app.mount('#app')
