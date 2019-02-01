export default {
  path: '/users',
  name: 'users',
  component: () => import(/* webpackChunkName: "user" */ './Users.vue'),
  children: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "user" */ './views/List.vue'),
    },
    {
      path: 'new',
      component: () => import(/* webpackChunkName: "user" */ './views/New.vue'),
    },
  ],
}
