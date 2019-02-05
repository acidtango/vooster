import Vue from 'vue'
import Router from 'vue-router'

import userRoutes from './users'

import Home from '@/views/home/Home'
import Register from '@/views/register/Register'
import Login from '@/views/login/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        public: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        public: true,
        onlyWhenLoggedOut: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        public: true,
        onlyWhenLoggedOut: true,
      },
    },
    ...userRoutes,
  ],
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
