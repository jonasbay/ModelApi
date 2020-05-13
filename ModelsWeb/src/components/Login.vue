<template>
    <div>
        <p>Noget lækker tekst her</p>
        <form>
            <div class="form-group">
                <label for="email">Email: </label>
                <input type="email" v-model="form.email" placeholder="Enter your email here" />
            </div>
            <div class="form-group">
                <label for="password">Password: </label>
                <input type="text" v-model="form.password" placeholder="Enter your password here" />
            </div>
            <div class="form-group">
                <button type="button" class="button" v-on:click="loginFunction">Login</button>
            </div>
        </form>
        <span class="text-danger">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data: function () {
            return {
                form: {
                    email: '',
                    password: ''
                },
                message: ''
            }
        },
        methods: {
            loginFunction() {
                let Login = {};
                Login.email = this.form.email;
                Login.password = this.form.password;
                fetch('https://localhost:44368/api/account/Login', {
                    method: 'POST',
                    body: JSON.stringify(Login),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(res => res.json().then((token) => {
                    localStorage.setItem("token", token.jwt);
                }
                ).catch(error => console.error('Error:', error)));
            }
        }
    }


</script>

<style scoped>
</style>