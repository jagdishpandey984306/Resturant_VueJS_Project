
const validations = {
  required: (value) => !!value || `This field is required.`,
  minLength: (value, length) => (value && value.length >= length) || `Minimum length is ${length}.`,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email address.',
  password: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value) || 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.',
  confirmPassword: (value, passwordValue) => value === passwordValue || 'Passwords do not match.',
};


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
