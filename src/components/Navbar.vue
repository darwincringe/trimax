<template>
  <b-navbar toggleable="lg" type="dark" class="non-sticky-navbar">
    <b-navbar-brand href="javascript:void(0)" @click="$router.push({ name: 'home'})">
      <img src="@/assets/logo.png" alt="Logo" width="50">
    </b-navbar-brand>

    <b-navbar-toggle target="navbarNav"></b-navbar-toggle>

    <b-collapse id="navbarNav" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="nav-item-text" @click="$router.push({ name: 'home'})">Home</b-nav-item>
        <b-nav-item class="nav-item-text" @click="$router.push({ name: 'watch'})">Watch</b-nav-item>
        <b-nav-item class="nav-item-text" @click="$router.push({ name: 'play'})">Play</b-nav-item>
        <b-nav-item class="nav-item-text" @click="$router.push({ name: 'read'})">Read</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ms-auto">
        <!-- <b-nav-item href="javascript:void(0)" @click="$router.push({ name: 'home'})" class="my-auto">
          <i class="fa-solid fa-bell text-white"></i>
        </b-nav-item> -->
        <b-nav-item href="javascript:void(0)" @click="openLoginModal" class="user-icon">
          <i class="fa-solid fa-circle-user"></i>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <login-modal></login-modal>
  </b-navbar>
</template>

<script>

import LoginModal from './LoginModal';
import Vue from 'vue';

export default {
  name: 'Navbar',
  components: {
    LoginModal,
  },
  methods: {
    openLoginModal() {
      this.$bvModal.show('loginModal');
    },
  },
  created() {
    Vue.prototype.$modal = this.$bvModal;
  },
};
</script>
