<!--<template>
    <div id="Login">
        <h1>Login</h1>

        <label>Username</label><br />
        <input v-model="username" /><br />
        <label>Password</label><br />
        <input v-model="password" /><br />
        <button @click="$fetch">Login</button>
        <span>
            {{ username }}
            {{ password }}
        </span>
    </div>
</template>
<script src="https://unpkg.com/vue"></script>
<script>
    export default {
        name: 'Login',
        username: '',
        password: ''
    };
    new Vue({
        el: '#Login',
        data: { username, password }
    });
</script>

<style scoped>
</style>-->


<template>
    <div id="Login">
        <!--<h1>Login</h1>
        <input v-model="username" /><br />-->
        <p>alex elsker, {{ Message }}</p>
    </div>
</template>

<script src="https://unpkg.com/vue"></script>

<script>
    export default {
        name: 'Login',
        data: { Message: 'Kage' }
    }
    //new Vue({
    //    el: '#app',
    //    data: {Message: 'Pik'}
    //});
</script>

<style scoped>
</style>