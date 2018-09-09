import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Index from '../../view/index.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('index', Index);
