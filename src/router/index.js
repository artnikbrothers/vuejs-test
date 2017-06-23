import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ProfilePage from '@/pages/ProfilePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/user/:id',
      name: 'profile-page',
      component: ProfilePage
    }
  ]
})
