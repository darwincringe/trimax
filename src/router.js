import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store';

import Home from './components/Home'
import Watch from './components/Watch'
import WatchPage from './components/WatchPage'
import ReadPage from './components/ReadPage'
import PlayPage from './components/PlayPage'
import Read from './components/Read'
import Play from './components/Play'

import { getAuth } from 'firebase/auth';

Vue.use(VueRouter)

const authMiddleware = (to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;
  
  if (user) {
    next();
  } else {
    store.commit('auth/setRequestedRoute', to.fullPath);
    Vue.prototype.$modal.show('loginModal');
  }
} 

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home' 
    },
    {
      path: '/watch/:id',
      component: WatchPage,
      name: 'watch-page' ,
      beforeEnter: authMiddleware
    },
    {
      path: '/watch',
      component: Watch,
      name: 'watch' 
    },
    {
      path: '/read/:id',
      component: ReadPage,
      name: 'read-page',
      beforeEnter: authMiddleware
    },
    {
      path: '/play/:id',
      component: PlayPage,
      name: 'play-page',
      beforeEnter: authMiddleware
    },
    {
      path: '/read',
      component: Read,
      name: 'read' 
    },
    {
      path: '/play',
      component: Play,
      name: 'play'
    }
  ]
})

export default router
