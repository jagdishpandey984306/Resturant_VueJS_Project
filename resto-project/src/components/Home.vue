<template>
    <Header />
    <div><router-link to="/add">Add Resturant</router-link></div>
    <table class="table table-border" border="1">
        <thead>
            <tr>
                <th width="5%">S.N</th>
                <th width="20%">Name</th>
                <th width="25%">Contact</th>
                <th width="30%">Address</th>
                <th width="20%">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in resturant" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.address }}</td>
                <td>
                    <router-link :to="'/update/' + item.id" class="btn btn-primary">Update</router-link>&nbsp;
                    <button class="btn btn-primary" v-on:click="deleteResturant(item.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios'
export default {
    name: 'Home',
    data() {
        return {
            resturant: []
        }
    },
    components: {
        Header
    },
    methods: {
        async deleteResturant(id) {
            let result = await axios.delete(`http://localhost:3000/resturant/${id}`);
            if (result.status == 200) {
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }

            let result = await axios.get("http://localhost:3000/resturant");
            this.resturant = result.data;
        }
    },
    async mounted() {
        this.loadData();
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>

