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
      // window.console.log('STORE ==> ' + JSON.stringify(respone))
      if (respone.success) {
        commit('SINGIN', respone.user)
      }
      if (respone) {
        return respone
      }
    },
    async ACTION_SINGOUT({ commit }) {
      const response = await GooglAuthService.SignOut()
      // window.console.log('STORE => ' + response)
      if (response.success) {
        commit('SINGIN', {})
        return { success: true, massage: 'Sign Out.' }
      } else {
        return { success: false, massage: 'Failed.' }
      }
    },
  },
  getters: {
    GET_USER_SINGIN(state) {
      return state.user
    },
  },
}
