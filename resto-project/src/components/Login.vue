<template>
  <div class="container mt-5">
    <img class="logo" src="../assets/resto-logo.png" />
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Login</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="form-group">
                <div class="mb-3 input-group">
                  <span class="input-group-text">
                    <font-awesome-icon icon="envelope" />
                  </span>
                  <input
                    v-model="email"
                    type="text"
                    class="form-control"
                    id="email"
                    @input="clearError('email')"
                  />
                </div>
                <span
                  v-if="validationErrors.email != true"
                  class="text-danger mb-2"
                  >{{ validationErrors.email }}</span
                >
              </div>

              <div class="form-group">
                <div class="mb-3 input-group">
                  <span class="input-group-text">
                    <font-awesome-icon icon="key" />
                  </span>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password"
                    @input="clearError('password')"
                  />
                </div>
                <span
                  v-if="validationErrors.password != true"
                  class="text-danger mb-2"
                  >{{ validationErrors.password }}</span
                >
              </div>

              <div class="text-center">
                <button @click="signIn" class="btn btn-primary">Login</button>
              </div>
              <p class="mt-2">
                Don't have an account?<router-link to="/sign-up"
                  >Sign Up</router-link
                >
              </p>

              <button @click="showToast">Show Toast</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";

export default {
  name: "Log-In",
  data() {
    return {
      email: "",
      password: "",
      validationErrors: {},
    };
  },
  methods: {
    showToast() {
      console.log("hi");
      toast.success("Succesfull");
    },
    validateForm() {
      this.validationErrors = {};
      this.validationErrors.email = this.$validate(
        this.email,
        "required",
        "email",
      );
      this.validationErrors.password = this.$validate(
        this.password,
        "required",
      );
      toast.error(Object.keys(this.validationErrors));
    },
    async signIn() {
      const isValid = this.validateForm();
      if (isValid) {
        let result = await axios.get(
          `${this.apiUrl}/users?email=${this.email}&password=${this.password}`,
        );
        if (result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "Home" });
        }
      }
    },
    clearError(fieldName) {
      this.validationErrors[fieldName] = "";
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
