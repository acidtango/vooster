export default [
  {
    path: '/users',
    component: () => import(/* webpackChunkName: "user" */ '@/views/users/List.vue'),
  },
  {
    path: '/users/new',
    component: () => import(/* webpackChunkName: "user" */ '@/views/users/New.vue'),
  },
]
