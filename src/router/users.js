import utils from '@/router/utils'

export default [
  utils.buildRoute('/users', 'users', 'list'),
  utils.buildRoute('/users/new', 'users', 'new'),
]
