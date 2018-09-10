import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Index from './index.vue';
import Login from './login.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('index', Index);
Vue.component('login', Login);

/**
 * 
 */
let store = new Vuex.Store({
    state: {

    }
});

/**
 * 
 */
let router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Index,
        }, {
            path: '/login',
            component: Login,
        }
    ]
});

/**
 * 
 */
let vm = new Vue({
    el: '#application',
    store: store,
    router: router,
});