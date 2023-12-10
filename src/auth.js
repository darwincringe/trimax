// src/store/modules/auth.js

import { saveState, loadState } from './localStorage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const getters = {
	getUser: (state) => state.user,
};

const STORAGE_KEY = 'bh2236';

const authModule = {
  namespaced: true,
  state: {
    user: null,
		requestedRoute: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      saveState(STORAGE_KEY, { user });
    },
		setRequestedRoute(state, requestedRoute) {
      state.requestedRoute = requestedRoute;
      saveState(STORAGE_KEY, { requestedRoute });
    },
    clearUser(state) {
      state.user = null;
      saveState(STORAGE_KEY, { user: null });
    },
  },
  actions: {
    initializeAuth({ commit }) {
      const auth = getAuth();

      const { user } = loadState(STORAGE_KEY) || {};

      if (user) {
        commit('setUser', user);
      }

      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          commit('setUser', firebaseUser);
        } else {
          commit('clearUser');
        }
      });
    },
		logoutUser({ commit }) {
      commit('setUser', null);
    },
  },
	getters
};

export default authModule;
