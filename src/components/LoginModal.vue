<template>
  <b-modal id="loginModal" :title="user ? 'User Account' : 'Login'" hide-footer hide-header-close no-close-on-backdrop>
		<template v-if="!user">
			<form v-if="loginMode" @submit.prevent="login">
				<b-form-group lclass="mt-3" label="Email" label-for="email">
					<b-form-input v-model="email" type="email" required></b-form-input>
				</b-form-group>

				<b-form-group class="mt-3" label="Password" label-for="password">
					<b-form-input v-model="password" type="password" required></b-form-input>
				</b-form-group>

				<b-button class="mt-3" type="button" variant="danger" @click="closeModal">Cancel</b-button>
				<b-button class="mt-3 mx-2" type="submit" variant="primary">Login</b-button>
				<p class="mt-3">Don't have an account? <a href="javascript:void(0)" @click="switchToRegistration">Register here</a></p>
			</form>

			<form v-else @submit.prevent="register">
				<b-form-group lclass="mt-3" label="Email" label-for="email">
					<b-form-input v-model="email" type="email" required></b-form-input>
				</b-form-group>

				<b-form-group class="mt-3" label="Password" label-for="password">
					<b-form-input v-model="password" type="password" required></b-form-input>
				</b-form-group>

				<b-form-group class="mt-3" label="Confirm Password" label-for="confirmPassword">
					<b-form-input v-model="confirmPassword" type="password" required></b-form-input>
				</b-form-group>

				<b-button class="mt-3" type="button" variant="danger" @click="closeModal">Cancel</b-button>
				<b-button class="mt-3 mx-2" type="submit" variant="primary">Register</b-button>
				<p class="mt-3">Already have an account? <a @click="switchToLogin" href="javascript:void(0)">Login here</a></p>
			</form>
		</template>
		<template v-else>
			<h5>Welcome Back {{ user.email }}!</h5>

			<b-button class="mt-3" type="button" variant="danger" @click="closeModal">Cancel</b-button>
			<b-button class="mt-3 mx-2" type="submit" variant="warning" @click="logout">Logout</b-button>
		</template>
  </b-modal>
</template>

<script>

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'LoginModal',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      loginMode: true,
    };
  },
  methods: {
		...mapActions('auth', ['logoutUser']),
    async login() {
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
				const user = userCredential.user;
				const requestedRoute = this.$store.state.auth.requestedRoute;
				
        this.$swal.fire({
					icon: 'success',
					title: 'Success',
					text: `Welcome Back ${user.email}!`,
				});
        this.closeModal();

				if(requestedRoute) {
					this.$router.push(requestedRoute);
					this.$store.commit('auth/setRequestedRoute', null);
				}
      } catch (error) {
        console.error('Login error:', error.message);
				this.$swal.fire({
					icon: 'error',
					title: 'Uh oh..',
					text: error.message,
				});
      }
    },
    async register() {
      try {
        if (this.password !== this.confirmPassword) {
          this.$swal.fire({
						icon: 'error',
						title: 'Uh oh..',
						text: 'Password id not match',
					});
          return;
        }

        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        this.$swal.fire({
					icon: 'success',
					title: 'Success',
					text: `Welcome ${user.email}!`,
				});
        this.closeModal();
      } catch (error) {
        console.error('Registration error:', error.message);
				this.$swal.fire({
					icon: 'error',
					title: 'Uh oh..',
					text: error.message,
				});
      }
    },
		async logout() {
      try {
        const auth = getAuth();
        await signOut(auth);
        this.logoutUser();
				this.closeModal();
				this.$swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Logout Success!',
				});
				this.$router.push('/');
      } catch (error) {
        console.error('Logout error:', error.message);
      }
    },
    switchToRegistration() {
			this.resetInputs();
      this.loginMode = false;
    },
    switchToLogin() {
			this.resetInputs();
      this.loginMode = true;
    },
		resetInputs() {
			this.email = '';
			this.password = '';
			this.confirmPassword = '';
		},
    closeModal() {
      this.$bvModal.hide('loginModal');
    },
  },
  computed: {
    ...mapState('auth', ['user']),
  },
};
</script>
