<template>
    <div>
        <h1>All jobs</h1>
        <form>
            <div class="form-group">
                <button type="button" class="button" v-on:click="created">List all jobs</button>
            </div>
            <ul>
                <li v-for="job in form.functionJobs">
                    {{ job.Customer }}
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'listAllJobs',
        data: function () {
            return {
                form: {
                    functionJobs: []
                }
            }
        },
        methods: {
            created() {
                let jobs = {};
                jobs.jobs = this.form.functionJobs;
                fetch('https://localhost:44368/api/jobs', {
                    method: 'GET',
                    credentials: 'include',
                    body: JSON.stringify(
                    ),
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then((responseJson) => {
                    return responseJson.json()
                }).then((data) => {
                    this.form.functionJobs = data
                })
                    .catch(error => alert('Fejl: ' + error));
            }
        }
    };
</script>

<style scoped>
</style>