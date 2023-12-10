import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Watch from './components/Watch'
import WatchPage from './components/WatchPage'
import ReadPage from './components/ReadPage'
import PlayPage from './components/PlayPage'
import Read from './components/Read'

Vue.use(VueRouter)

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
      name: 'watch-page' 
    },
    {
      path: '/watch',
      component: Watch,
      name: 'watch' 
    },
    {
      path: '/read/:id',
      component: ReadPage,
      name: 'read-page' 
    },
    {
      path: '/play/:id',
      component: PlayPage,
      name: 'play-page' 
    },
    {
      path: '/read',
      component: Read,
      name: 'read' 
    },
  ]
})

export default router
