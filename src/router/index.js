import Vue from 'vue'
import Router from 'vue-router'
import BullteinBoard from '@/components/BullteinBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BullteinBoard',
      component: BullteinBoard
    }
  ]
})
