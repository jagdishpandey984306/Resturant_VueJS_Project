// toastrPlugin.js

import { createApp } from 'vue';
import VueToastr from 'vue-toastr';

// Function to create and mount the toastr component
function createToastrComponent(options) {
  const app = createApp(VueToastr, options);
  const toastrContainer = document.createElement('div');
  document.body.appendChild(toastrContainer);
  app.mount(toastrContainer);
  return app.config.globalProperties.$toastr;
}

// Custom toastr plugin
const ToastrPlugin = {
  install(app, options) {
    const toastr = createToastrComponent(options);
    app.config.globalProperties.$toastr = toastr;
  },
};

export default ToastrPlugin;
