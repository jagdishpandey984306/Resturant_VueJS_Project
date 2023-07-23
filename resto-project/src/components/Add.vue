<template>
    <Header />
    <h1>Add Resturant</h1>
    <form class="add" @submit.prevent="addResturant">
        <div class="row">
            <div class="col-md-6">
                <input type="text" v-model="formData.name" placeholder="Enter Name">
                <p v-if="validationErrors.name" style="color: red;">{{ validationErrors.name }}</p>

                <input type="text" v-model="formData.contact" placeholder="Enter Contact">
                <p v-if="validationErrors.contact" style="color: red;">{{ validationErrors.contact }}</p>

                <input type="text" v-model="formData.address" placeholder="Enter Address">
                <p v-if="validationErrors.address" style="color: red;">{{ validationErrors.address }}</p>

                <button type="submit">Add New Resturant</button>
            </div>
        </div>
    </form>
    <button @click="showToast">Show Toast</button>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    name: 'Add',
    data() {
        return {
            validationErrors: {},
            formData: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        showToast() {
            // Use the global $toast property to show the toast
            this.$toast.show('This is a toast message!', {
                duration: 3000,
                position: 'bottom-right',
                // Other configuration options (if applicable)
            });
        },
        validateForm() {
            this.validationErrors = {};
            // Custom validation for username and email fields
            this.validationErrors.name = this.$validate(this.username, 'required');
            this.validationErrors.contact = this.$validate(this.contact, 'required');
            this.validationErrors.address = this.$validate(this.address, 'required');
        },
        async addResturant(e) {
            debugger
            this.validateForm();
            // Perform form submission if there are no errors
            if (Object.keys(this.validationErrors).length === 0) {
                let result = await axios.post("http://localhost:3000/resturant", {
                    name: this.resturant.name,
                    contact: this.resturant.contact,
                    address: this.resturant.address
                });

                if (result.status == 201) {
                    toast.success("Added successfully.", { autoClose: 5000 });
                    this.$router.push({ name: "Home" });
                }
            }
        }
    },
    components: {
        Header
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>

