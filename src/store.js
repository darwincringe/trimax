import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './auth';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: authModule,
  },
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
})
