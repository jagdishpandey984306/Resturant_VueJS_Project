import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidationPlugin from './validation.js';
import fontAwesomePlugin from './fontAwesomePlugin';
import apiUrlPlugin from './api';

const app = createApp(App);
app.use(router)
app.use(ValidationPlugin)
app.use(fontAwesomePlugin)
app.mixin(apiUrlPlugin)
app.mount('#app')
