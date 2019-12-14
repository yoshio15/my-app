import Vue from 'vue'
import Router from 'vue-router'
import Firebase from 'firebase'
import Top from '@/components/Top'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import BulletinBoard from '@/components/BulletinBoard'
import DirectMessage from '@/components/DirectMessage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
      meta: { requiresAuth: false }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: { requiresAuth: false }
    },
    {
      path: '/',
      name: 'Top',
      component: Top,
      meta: { requiresAuth: true }
    },
    {
      path: '/bulletin-board',
      name: 'BulletinBoard',
      component: BulletinBoard,
      meta: { requiresAuth: true }
    },
    {
      path: '/direct-message',
      name: 'DirectMessage',
      component: DirectMessage,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = Firebase.auth().currentUser
  if (requiresAuth) {
    console.log(currentUser)
    if (!currentUser) {
      next({ path: '/sign-in' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;