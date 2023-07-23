import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidationPlugin from './validation.js';
import fontAwesomePlugin from './fontAwesomePlugin';
import apiUrlPlugin from './api'

createApp(App)
    .use(router)
    .use(ValidationPlugin)
    .use(fontAwesomePlugin)
    .mixin(apiUrlPlugin)
    .mount('#app')
