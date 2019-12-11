import Vue from 'vue'
import Router from 'vue-router'
import BulletinBoard from '@/components/BulletinBoard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BulletinBoard',
      component: BulletinBoard
    }
  ]
})
