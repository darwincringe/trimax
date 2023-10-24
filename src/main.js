import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'jquery';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/main.css';

window.$ = window.jQuery = require('jquery');
window.bootstrap = require('bootstrap');

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});