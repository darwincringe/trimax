import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/main.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
