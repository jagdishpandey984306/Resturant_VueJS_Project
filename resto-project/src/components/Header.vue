<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Resturant</router-link>
        <a v-on:click="logout" href="#"><b>Welcome!{{ username }}</b>&nbsp;Logout</a>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            username: ''
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'Login' });
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.username = JSON.parse(user).name;
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background-color: #ddd;
    color: #333;
}
</style>