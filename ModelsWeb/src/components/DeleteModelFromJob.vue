<template>
    <div>
        <h1>Delete model from job</h1>
        <form>
            <div class="form-group">
                <label for="jobid">Job id: </label>
                <input type="text" v-model="form.jobid" placeholder="Enter job id" />
            </div>
            <div class="form-group">
                <label for="modelid">Model id: </label>
                <input type="text" v-model="form.modelid" placeholder="Enter model id" />
            </div>
            <div class="form-group">
                <button type="button" class="button" v-on:click="deleteModelFromJob">Delete model from job</button>
            </div>
        </form>
        <span class="text-danger">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: 'DeleteModelFromJob',
        data: function () {
            return {
                form: {
                    jobid: '',
                    modelid: ''
                },
                message: ''
            }
        },
        methods: {
            deleteModelFromJob() {
                let url = 'https://localhost:44368/api/Jobs/' + this.form.jobid + '/model/' + this.form.modelid;
                fetch(url, {
                    method: 'DELETE',
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