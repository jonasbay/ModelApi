<head>
    <script src="https://unpkg.com/vue"></script>
</head>

<template>
    <div id="app">
        <center>
            <nav>
                <router-link to="/">Home</router-link>
                <br />
                <router-link to="/Login">Login</router-link>
                <br />
                <router-link to="/AllJobs">See all jobs</router-link>
                <br />
                <router-link to="/CreateJob">Create new jobs</router-link>
                <br />
                <router-link to="/CreateManager">Create new manager</router-link>
                <br />
                <router-link to="/CreateModel">Create new model</router-link>
                <br />
                <router-link to="/AddModelToJob">Add model to job</router-link>
                <br />
                <router-link to="/DeleteModelFromJob">Delete model from job</router-link>
                <br />
                <router-link to="/AddExpenceToJob">Add expence to job</router-link>
            </nav>
            <div id="page">
                <router-view></router-view>
            </div>
        </center>
    </div>
</template>



<script>
    import Home from './components/Home.vue';
    import Login from './components/Login.vue';
    import AllJobs from './components/AllJobs.vue';
    import CreateJob from './components/CreateJob.vue';
    import CreateManager from './components/CreateManager.vue';
    import CreateModel from './components/CreateModel.vue';
    import AddModelToJob from './components/AddModelToJob.vue';
    import DeleteModelFromJob from './components/DeleteModelFromJob.vue'; 
    import AddExpenceToJob from './components/AddExpenceToJob.vue'; 
    
    export default {
        name: 'app',
        components: {
            Home,
            Login,
            AllJobs,
            CreateJob,
            CreateManager,
            CreateModel,   
            AddModelToJob,
            DeleteModelFromJob,
            AddExpenceToJob
        }
    };

</script>

<style>
</style>

