import * as types from './mutation_types'

export default {
  // -- Login
  [types.REQUEST_LOGIN](state) {
    state.isLoading = true
  },
  [types.RECEIVE_LOGIN_SUCCESS](state, data) {
    state.isLoading = false
    state.me = data
  },
  [types.RECEIVE_LOGIN_ERROR](state, error) {
    state.isLoading = false
  },

  // -- Register
  [types.REQUEST_REGISTER](state) {
    state.isLoading = true
  },
  [types.RECEIVE_REGISTER_SUCCESS](state, data) {
    state.isLoading = false
    state.me = data
  },
  [types.RECEIVE_REGISTER_ERROR](state, error) {
    state.isLoading = false
    state.error = error
  },
}
