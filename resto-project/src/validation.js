// validation.js

// Custom validation rules
const validations = {
    required: (value) => !!value || 'This field is required.',
    minLength: (value, length) => (value && value.length >= length) || `Minimum length is ${length}.`,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email address.',
    // Add more custom validation rules as needed
  };
  
  // Custom validation plugin
  const ValidationPlugin = {
    install(app) {
      app.config.globalProperties.$validate = (value, rule, ...args) => {
        if (validations[rule]) {
          return validations[rule](value, ...args);
        } else {
          console.warn(`Validation rule "${rule}" not found.`);
          return true; // Return true to pass validation if rule is not found
        }
      };
    },
  };
  
  export default ValidationPlugin;
  