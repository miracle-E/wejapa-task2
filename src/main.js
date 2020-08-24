import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import { store } from './store'
import axios from './plugins/axios'
import VueRouter from 'vue-router'

// const axiosInstance = axios.create({baseURL:"https://rel.ink/api"})
// //on successful response
// axiosInstance.interceptors.response.use(response=>response, error=> Promise.reject(error))

Vue.prototype.$axios = axios

// Import the styles directly
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')