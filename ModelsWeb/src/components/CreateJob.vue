<template>
    <div>
        <h1>Opret et job</h1>
        <form>
            <div class="form-group">
                <label for="customer">Customer: </label>
                <input type="text" v-model="form.customer" placeholder="Enter customer" />
            </div>
            <div class="form-group">
                <label for="startdate">StartDate: </label>
                <input type="date" v-model="form.startdate" placeholder="Enter start date" />
            </div>
            <div class="form-group">
                <label for="days">Days: </label>
                <input type="number" step="1" min="1" v-model="form.days" placeholder="Enter how many days" />
            </div>
            <div class="form-group">
                <label for="location">Location: </label>
                <input type="text" v-model="form.location" placeholder="Inset location" />
            </div>
            <div class="form-group">
                <label for="comments">Comments: </label>
                <input type="text" v-model="form.comments" placeholder="Insert comments" />
            </div>
            <div class="form-group">
                <button type="button" class="button" v-on:click="createJobFunction">Opret job</button>
            </div>
        </form>
        <span class="text-danger">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: 'CreateJob',
        data: function () {
            return {
                form: {
                    customer: '',
                    startdate: '',
                    days: 1,
                    location: '',
                    comments: ''
                },
                message: ''
            }
        },
        methods: {
            createJobFunction() {
                fetch('https://localhost:44368/api/jobs', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(
                        this.form
                        //{
                        //"customer": this.form.customer,
                        //"startDate": this.form.startdate,
                        //"days": this.form.days,
                        //"location": this.form.location,
                        //"comments": this.form.comments
                     
                        //}
                    ),
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