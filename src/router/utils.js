import merge from 'lodash/merge'

export function buildRoute(path, resourceName, method, options = {}) {
  const defaultOptions = { meta: { auth: true, public: true } }
  const result = {
    path,
    name: `${resourceName}-${method}`,
    component: () => import(`@/views/${resourceName}/${method}.vue`),
  }
  return merge(result, merge(defaultOptions, options))
}
