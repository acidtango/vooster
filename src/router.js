import Vue from 'vue'
import Router from 'vue-router'

import homeRoutes from './modules/home/routes'
import loginRoutes from './modules/login/routes'
import registerRoutes from './modules/register/routes'
import usersRoutes from './modules/users/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [homeRoutes, loginRoutes, registerRoutes, usersRoutes],
})
