<template>
    <div>
        <h1>Opret ny model</h1>
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
                <label for="phoneno">Phone no.: </label>
                <input type="text" v-model="form.phoneno" placeholder="Enter your phone no. here" />
            </div>
            <div class="form-group">
                <label for="addressline1">Address: </label>
                <input type="text" v-model="form.addressline1" placeholder="Enter your address here" />
            </div>
            <div class="form-group">
                <label for="zip">Zip code: </label>
                <input type="text" v-model="form.zip" placeholder="Enter your zip code here" />
            </div>
            <div class="form-group">
                <button type="button" class="button" v-on:click="createModelFunction">Opret model</button>
            </div>
        </form>
        <span class="text-danger">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: 'CreateModel',
        data: function () {
            return {
                form: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    phoneno: '',
                    addressline1: '',
                    zip: ''
                },
                message: ''
            }
        },
        methods: {
            createModelFunction() {
                fetch('https://localhost:44368/api/models', {
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