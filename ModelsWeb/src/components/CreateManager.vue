<template>
    <div>
        <h1>Opret ny manager</h1>
        <form>
            <div class="form-group">
                <label for="firstname">First Name: </label>
                <input type="text" v-model="form.firstname" placeholder="Enter your first name here" />
            </div>
            <div class="form-group">
                <label for="lastname">Last Name: </label>
                <input type="text" v-model="form.lastname" placeholder="Enter your last name here" />
            </div>
            <div class="form-group">
                <label for="email">Email: </label>
                <input type="email" v-model="form.email" placeholder="Enter your email here" />
            </div>
            <div class="form-group">
                <label for="password">Password: </label>
                <input type="text" v-model="form.password" placeholder="Enter your password here" />
            </div>
            <div class="form-group">
                <button type="button" class="button" v-on:click="createManagerFunction">Opret manager</button>
            </div>
        </form>
        <span class="text-danger">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: 'CreateManager',
        data: function () {
            return {
                form: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: ''
                },
                message: ''
            }
        },
        methods: {
            createManagerFunction() {
                fetch('https://localhost:44368/api/managers', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(this.form),
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then(responseJson => {
                    var items = responseJson;
                })
                    .catch(error => alert('Fejl: ' + error));
            }
        }
    }
        
</script>

<style scoped>
</style>