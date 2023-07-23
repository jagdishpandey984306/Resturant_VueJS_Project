import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { CAlert } from '@coreui/vue';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidationPlugin from './validation.js';
import toastifyPlugin from './toastrPlugin';

createApp(App)
    .use(router)
    .use(CAlert)
    .use(ValidationPlugin)
    .use(toastifyPlugin)
    .mount('#app')
