import GooglAuthService from '../../services/google.auth'
export default {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    SINGIN(state, userSession) {
      state.user = userSession
    },
  },
  actions: {
    async ACTION_SINGIN({ commit }) {
      const respone = await GooglAuthService.GoogleAuthSingIn()
      if (respone.success) {
        commit('SINGIN', respone.user)
      }
      if (respone) {
        return respone
      }
    },
    async ACTION_SINGOUT({ commit }) {
      const response = await GooglAuthService.SignOut()
      if (response.success) {
        commit('SINGIN', {})
        return { success: true, massage: 'Sign Out.' }
      } else {
        return { success: false, massage: 'Failed.' }
      }
    },
    async ACTION_USER_ID({ commit }) {
      const response = await GooglAuthService.GetUidSingIn()
      if (response) {
        window.console.log(response)
      }
    },
  },
  getters: {
    GET_USER_SINGIN(state) {
      return state.user
    },
    GET_VALIDATION_PERMISSION() {},
  },
}
