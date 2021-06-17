import { Voites } from '../../models/voites'
import Service from '../../services/manage.firestore'
import Utils from '../../utils/utils'
export default {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {},
  actions: {
    async ACTION_NEW_VOITE_POLE({ commit }, payload) {
      const item = {
        Path: Utils.SubCollection(),
        user: new Voites(
          payload.UserId,
          payload.Username,
          payload.Option,
          payload.RefVoite
        ),
      }
      const result = await Service.InsetVoitPole(item)
      return result
    },
  },
  getters: {},
}
