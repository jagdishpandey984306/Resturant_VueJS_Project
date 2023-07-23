<template>
    <div class="container mt-5">
        <img class="logo" src="../assets/resto-logo.png" />
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-center">Sign Up</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="signUp">
                            <div class="row">
                                <div class="form-group">
                                    <div class="mb-3 input-group">
                                        <span class="input-group-text">
                                            Name
                                        </span>
                                        <input v-model="name" type="text" class="form-control" id="name">
                                    </div>
                                    <span v-if="errors.name" class="text-danger mb-2">{{ errors.name }}</span>
                                </div>

                                <div class="form-group">
                                    <div class="mb-3 input-group">
                                        <span class="input-group-text">
                                            Email
                                        </span>
                                        <input v-model="email" type="text" class="form-control" id="email">
                                    </div>
                                    <span v-if="errors.email" class="text-danger mb-2">{{ errors.email }}</span>
                                </div>

                                <div class="form-group">
                                    <div class="mb-3 input-group">
                                        <span class="input-group-text">
                                            Password
                                        </span>
                                        <input v-model="password.password" type="password" class="form-control" id="password">
                                    </div>
                                    <span v-if="errors.password" class="text-danger mb-2">{{ errors.password }}</span>
                                </div>

                                <div class="form-group">
                                    <div class="mb-3 input-group">
                                        <span class="input-group-text">
                                            Confirm Password
                                        </span>
                                        <input v-model="password.confirmPassword" type="password" class="form-control"
                                            id="confirmPassword">
                                    </div>
                                    <span v-if="errors.confirmPassword" class="text-danger mb-2">{{ errors.confirmPassword
                                    }}</span>
                                </div>

                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                                <p class="mt-2">
                                    Already have an account?
                                    <router-link to="/login">Login</router-link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: {
                password: '',
                confirmPassword: ''
            },
            errors: {}
        };
    },
    methods: {
        validateForm() {
            this.errors = {};
            this.errors.name = this.$validate(this.name, 'required');
            this.errors.email = this.$validate(this.email,'email', 'required');
            this.errors.password = this.$validate(this.password.password, 'password','required');
            this.errors.confirmPassword = this.$validate(this.password.confirmPassword, 'confirmPassword','required', this.password.password);
            return Object.keys(this.errors).length === 0;
        },
        async signUp() {
            debugger;
            const isformValid = await this.validateForm();
            if (isformValid) {
                let result = await axios.post(`${this.apiUrl}/users`, {
                    name: this.name,
                    email: this.email,
                    password: this.password.password,

                });
                console.warn(result);
                if (result.status == 201) {
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({ name: "Home" });
                }
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>