import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index')
    },
    {
      path: '/move',
      name: 'Move',
      component: () => import('@/views/move/index')
    },
    {
      path: '/buy',
      name: 'Buy',
      component: () => import('@/views/buy/index')
    }
  ]
})
