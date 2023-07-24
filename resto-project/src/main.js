import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import ValidationPlugin from "./validation.js";
import fontAwesomePlugin from "./fontAwesomePlugin";
import apiUrlPlugin from "./api";
import { Toast } from "vue-toastr";
// import toastifyPlugin from './toastifyPlugin';

createApp(App)
  .use(router)
  .use(ValidationPlugin)
  .use(fontAwesomePlugin)
  .use(Toast)
  .mixin(apiUrlPlugin)
  .mount("#app");
