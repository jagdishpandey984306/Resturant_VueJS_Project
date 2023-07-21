<template>
    <Header />
    <h1>Add Resturant</h1>
    <form class="add">
        <div class="row">
            <div class="col-md-6">
                <input type="text" v-model="resturant.name" placeholder="Enter Name">
                <input type="text" v-model="resturant.contact" placeholder="Enter Contact">
                <input type="text" v-model="resturant.address" placeholder="Enter Address">
                <button type="button" v-on:click="addResturant">Add New Resturant</button>
            </div>
            <div class="col-md-6">
                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
                </p>
            </div>
        </div>
    </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios'
export default {
    name: 'Add',
    data() {
        return {
            errors: [],
            resturant: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        async addResturant(e) {
            debugger
            if (this.resturant.name && this.resturant.contact && this.resturant.address) {
                return true;
            }
            this.errors = [];
            if (!this.resturant.name) {
                this.errors.push('Name required.');
            }
            if (!this.resturant.contact) {
                this.errors.push('contact required.');
            }
            if (!this.resturant.address) {
                this.errors.push('address required.');
            }
            e.preventDefault();
            if (this.errors.length == 0) {
                let result = await axios.post("http://localhost:3000/resturant", {
                    name: this.resturant.name,
                    contact: this.resturant.contact,
                    address: this.resturant.address
                });

                if (result.status == 201) {
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

