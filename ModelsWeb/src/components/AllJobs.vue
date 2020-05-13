<template>
    <div>
        <h1>All jobs</h1>
        <div class="form-group">
            <button type="button" class="button" v-on:click="created">List all jobs</button>
        </div>
        <ul v-for="job in functionJobs">
            <li>
                {{ job.Customer }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'listAllJobs',
        data: function () {
            return {
                functionJobs: []
            }
        },
        methods: {
            created() {
                var jobs = [];
                fetch('https://localhost:44368/api/jobs', {
                    method: 'GET',
                    credentials: 'include',
                    body: JSON.stringify(
                    ),
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                }).then((responseJson) => responseJson.json()

                ).then(function (data){})
                    .catch(error => alert('Fejl: ' + error));
            }
        }
    };
</script>

<style scoped>
</style>