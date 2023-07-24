<template>
    <Header />
    <h1>Update Resturant</h1>
    <form class="add">
        <input type="text" v-model="resturant.name" placeholder="Enter Name">
        <input type="text" v-model="resturant.contact" placeholder="Enter Contact">
        <input type="text" v-model="resturant.address" placeholder="Enter Address">
        <button type="button" v-on:click="updateResturant">Update Resturant</button>
    </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios'
export default {
    name: 'Update',
    data() {
        return {
            resturant: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        async updateResturant() {
            debugger
            let result = await axios.put(`http://localhost:3000/resturant/${this.$route.params.id}`, {
                name: this.resturant.name,
                contact: this.resturant.contact,
                address: this.resturant.address
            });

            if (result.status == 200) {
                this.$router.push({ name: "Home" });
            }
        }
    },
    components: {
        Header
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

        const result = await axios.get(`http://localhost:3000/resturant/${this.$route.params.id}`);

        this.resturant = result.data;
    }
}
</script>

