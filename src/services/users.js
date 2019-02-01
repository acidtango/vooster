import Api from '@/api'

const UserService = {
  async me() {
    try {
      const response = await Api.get('/me')

      return response.data.user
    } catch (error) {
      throw new Error(error.response.status, error.response.data.detail)
    }
  },

  async login(params) {
    try {
      const response = await Api.post('/auth', params)

      return response.data.user
    } catch (error) {
      throw new Error(error.response.status, error.response.data.detail)
    }
  },

  logout() {
    // TODO
  },

  async register(params) {
    try {
      const response = await Api.post('/register', params)

      return response.data.user
    } catch (error) {
      throw new Error(error.response.status, error.response.data.detail)
    }
  },
}

export default UserService
