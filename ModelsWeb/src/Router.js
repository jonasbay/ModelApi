import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import AllJobs from './components/AllJobs.vue';
import CreateJob from './components/CreateJob.vue';
import CreateManager from './components/CreateManager.vue';
import CreateModel from './components/CreateModel.vue';
import ViewJob from './components/ViewJob.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/allJobs",
            name: "AllJobs",
            component: AllJobs
        },
        {
            path: "/viewJob",
            name: "ViewJob",
            component: ViewJob
        },
        {
            path: "/createJob",
            name: "CreateJob",
            component: CreateJob
        },
        {
            path: "/createModel",
            name: "CreateModel",
            component: CreateModel
        },
        {
            path: "/createManager",
            name: "CreateManager",
            component: CreateManager
        }
    ]
});