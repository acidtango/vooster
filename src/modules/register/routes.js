export default {
  path: '/register',
  name: 'register',
  component: () => import(/* webpackChunkName: "register" */ './Register.vue'),
}
