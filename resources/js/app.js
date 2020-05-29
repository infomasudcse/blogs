
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {routes} from './routes.js';

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMAster.vue').default);



const router = new VueRouter({
    routes, // short for `routes: routes`
    mode:'history'
  });


const app = new Vue({
    el: '#app',
    router
});
