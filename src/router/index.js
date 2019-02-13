import Vue from 'vue'
import Router from 'vue-router'

import userRoutes from './users'

import utils from '@/router/utils'

Vue.use(Router)

let routes = [
  utils.buildRoute('/', 'home', 'show'),
  utils.buildRoute('/login', 'login', 'show', { meta: { onlyWhenLoggedOut: true } }),
  utils.buildRoute('/sign_up', 'register', 'show', { meta: { onlyWhenLoggedOut: true } }),
  ...userRoutes,
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, _from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = false // TODO: Use real values

  if (!isPublic && !loggedIn) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath },
    })
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next()
})

export default router
