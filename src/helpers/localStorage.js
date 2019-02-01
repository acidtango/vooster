import isObject from 'lodash/isObject'

const NAMESPACE = 'vooster'

const LocalStorage = {
  get: key => {
    const data = localStorage.getItem(`${NAMESPACE}-${key}`)
    try {
      return JSON.parse(data)
    } catch {
      return data
    }
  },

  set: (key, value) => {
    if (!key || !value) {
      return false
    }

    const data = isObject(value) ? JSON.stringify(value) : value
    localStorage.setItem(`${NAMESPACE}-${key}`, data)

    return true
  },

  remove: key => {
    return localStorage.removeItem(`${NAMESPACE}-${key}`)
  },

  has: key => {
    const data = localStorage.getItem(`${NAMESPACE}-${key}`)

    return !!data
  },
}

export default LocalStorage
