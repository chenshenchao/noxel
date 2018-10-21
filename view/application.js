import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import IndexPage from './page/index.vue';
import LoginPage from './page/login.vue';
import DraftPage from './page/draft.vue';

Vue.use(Vuex);
Vue.use(VueRouter);


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
            component: IndexPage,
        }, {
            path: '/login',
            component: LoginPage,
        }, {
            path: '/draft',
            component: DraftPage,
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