<template>
    <Header />
    <h1>Add Resturant</h1>
    <form class="add" @submit.prevent="addResturant">
        <div class="row">
            <div class="col-md-6">
                <input type="text" v-model="formData.name" placeholder="Enter Name">
                <p v-if="errors.name" :class="{ 'error': errors.email }">{{ errors.name }}</p>

                <input type="text" v-model="formData.contact" placeholder="Enter Contact">
                <p v-if="errors.contact" style="color: red;">{{ errors.contact }}</p>

                <input type="text" v-model="formData.address" placeholder="Enter Address">
                <p v-if="errors.address" style="color: red;">{{ errors.address }}</p>

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
            errors: {},
            formData: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        validateForm() {
            this.errors = {};
            this.errors.name = this.$validate(this.username, 'required');
            this.errors.contact = this.$validate(this.contact, 'required');
            this.errors.address = this.$validate(this.address, 'required');
        },
        async addResturant() {
            this.validateForm();
            if (Object.keys(this.errors).length === 0) {
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

