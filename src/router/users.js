import { buildRoute } from '@/router/utils'

export default [buildRoute('/users', 'users', 'list'), buildRoute('/users/new', 'users', 'new')]
