import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import BulletinBoard from '@/components/BulletinBoard'
import DirectMessage from '@/components/DirectMessage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/bulletin-board',
      name: 'BulletinBoard',
      component: BulletinBoard
    },
    {
      path: '/direct-message',
      name: 'DirectMessage',
      component: DirectMessage
    }
  ]
})
