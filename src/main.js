import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./global/css/reuse.css";
import "./global/css/global.css";
import './registerServiceWorker'

const app = createApp(App)

app.use(router)
app.mount('#app')