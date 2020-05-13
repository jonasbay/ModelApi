<template>
    <div>
        <h1>Add new expence to a job</h1>
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
                <label for="date">Date: </label>
                <input type="date" v-model="form.date" />
            </div>
            <div class="form-group">
                <label for="text">Text: </label>
                <input type="text" v-model="form.text" placeholder="Enter a description" />
            </div>
            <div class="form-group">
                <label for="amount">Amount: $</label>
                <input type="number" step="10" v-model="form.amount" placeholder="Enter the amount" /> 

            </div>
            <div class="form-group">
                <button type="button" class="button" v-on:click="AddExpenseFunction">Add expense</button>
            </div>
        </form>
        <span class="text-danger">{{message}}</span>
    </div>
</template>

<script>
    export default {
        name: 'AddExpense',
        data: function () {
            return {
                form: {
                    jobid: '',
                    modelid: '',
                    date: '',
                    text: '',
                    amount: 0
                },
                message: ''
            }
        },
        methods: {
            AddExpenseFunction() {
                fetch('https://localhost:44368/api/expenses', {
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