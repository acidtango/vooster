import axios from 'axios'

const Api = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL
  },

  setHeader(key, value) {
    axios.defaults.headers.common[key] = value
  },

  removeHeader(key) {
    delete axios.defaults.headers.common[key]
  },

  get(resource) {
    return axios.get(resource)
  },

  post(resource, data) {
    return axios.post(resource, data)
  },

  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   */
  customRequest(data) {
    return axios(data)
  },
}

export default Api
