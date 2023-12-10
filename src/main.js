import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Swal from 'sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/main.css';

import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$swal = Swal;

const firebaseConfig = {
  apiKey: "AIzaSyCtnlVsAdAerhQiYAhGxKRxNaDOpY5gAls",
  authDomain: "trimax-ec1e9.firebaseapp.com",
  projectId: "trimax-ec1e9",
  storageBucket: "trimax-ec1e9.appspot.com",
  messagingSenderId: "1040541771597",
  appId: "1:1040541771597:web:9a3f84cf71c094b3027904",
  measurementId: "G-CQK4EVCCKL"
};

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

new Vue({
  el: '#app',
  router,
  store,
  beforeCreate() {
    this.$store.dispatch('auth/initializeAuth');
  },
  render: (h) => h(App),
});
