
import { createApp } from 'vue'
import App from './App.vue'

// VueRouter
import router from './router/index'

import "bootstrap/dist/css/bootstrap.min.css"
import "./style/main.scss"
import "bootstrap"



const app = createApp(App);
app.use(router);

app.mount('#app')
