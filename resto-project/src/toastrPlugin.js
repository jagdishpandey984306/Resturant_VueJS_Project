// Import the custom toastify component (replace 'vue-toastify' with the actual library name)
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

// Create an object that will act as the plugin
const toastifyPlugin = {
  install: (app) => {
    // Inject the toastify component into the app as a global property
    app.config.globalProperties.$toast = Toast;

    // Optionally, you can add custom methods or configurations to the toastify component here
    // For example:npm i vue-toastification
    app.config.globalProperties.$toastOptions = {
      duration: 3000,
      position: 'bottom-right',
      //   // Other options
    };
  },
};

export default toastifyPlugin;
