import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons

// Add all solid icons to the library
library.add(fas);

const fontAwesomePlugin = {
  install: (app) => {
    app.component('font-awesome-icon', FontAwesomeIcon);
  },
};

export default fontAwesomePlugin;
