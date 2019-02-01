import * as types from './mutation_types'
import UserService from '@/services/user'

// -- Login
export const requestLogin = ({ commit }) => commit(types.REQUEST_LOGIN)
export const receiveLoginSuccess = ({ commit }, data) => commit(types.RECEIVE_LOGIN_SUCCESS, data)
export const receiveLoginError = ({ commit }, error) => commit(types.RECEIVE_LOGIN_ERROR, error)

export const login = ({ dispatch }, params) => {
  dispatch('requestLogin')

  UserService.login(params)
    .then(({ data }) => dispatch('receiveLoginSuccess', data))
    .catch(error => dispatch('receiveLoginError', error))
}

// -- Register
export const requestRegister = ({ commit }) => commit(types.REQUEST_REGISTER)
export const receiveRegisterSuccess = ({ commit }, data) => {
  return commit(types.RECEIVE_REGISTER_SUCCESS, data)
}
export const receiveRegisterError = ({ commit }, error) => {
  return commit(types.RECEIVE_REGISTER_ERROR, error)
}

export const register = ({ dispatch }, params) => {
  dispatch('requestRegister')

  UserService.register(params)
    .then(({ data }) => dispatch('receiveRegisterSuccess', data))
    .catch(error => dispatch('receiveRegisterError', error))
}
