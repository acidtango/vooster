import Cookies from 'js-cookie'

const CookieStorage = {
  get: (...args) => {
    return Cookies.get(...args)
  },

  set: (...args) => {
    const cookie = Cookies.set(...args)
    // js-cookie returns a string when the cookie is set, undefined when the
    // value is missing and an object when no arguments are passed
    return typeof cookie === 'string'
  },

  remove: (...args) => {
    return Cookies.remove(...args)
  },

  has: name => {
    return CookieStorage.get(name) !== undefined
  },

  all: () => {
    return Cookies.getJSON()
  },

  raw: () => {
    return document.cookie
  },
}

export default CookieStorage
