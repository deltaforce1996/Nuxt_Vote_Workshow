import Services from '../../services/manage.firestore'
import Utils from '../../utils/utils'
import { Poles } from '../../models/poles'
export default {
  namespaced: true,
  state: {
    ListPoles: [],
  },
  mutations: {
    FETCH_LIST_POLES(state, poles) {
      state.ListPoles = poles
    },
    INSERT_NEWPOLE(state, pole) {
      state.ListPoles.push(pole)
    },
  },
  actions: {
    async ACTION_FETCH_LISTPOLES({ commit }) {
      window.console.log('ACTION_FETCH_LISTPOLES')
      try {
        const voites = await Services.FecthPoles('voites')
        const uservoite = await Services.FecthVoites('uservoite')
        const result = voites.map(
          (el) =>
            new Poles(
              el.PoleId,
              el.Description,
              el.Exp,
              el.TimeStamp,
              el.PoleName,
              el.By,
              el.Options,
              uservoite.filter((user) => user.RefVoite === el.PoleId)
            )
        )
        commit('FETCH_LIST_POLES', result)
        return {
          success: true,
          massage: 'Fecth all pole success.',
        }
      } catch (error) {
        commit('FETCH_LIST_POLES', [])
        return {
          success: false,
          massage: 'Fecth failed.',
        }
      }
    },
    async ACTION_CREATE_NEWPOLE({ commit }, payload) {
      try {
        const response = await Services.CreateNewPoles({
          collection: Utils.BaseCollection(),
          pole: new Poles(
            null,
            payload.Description,
            parseInt(payload.Exp),
            parseInt(payload.TimeStamp),
            payload.PoleName,
            payload.By,
            payload.Options
          ),
        })
        if (response.success) {
          commit('INSERT_NEWPOLE', payload)
        }
        if (response) {
          return response
        }
      } catch (error) {
        return { success: false, massage: error }
      }
    },
    async ACTION_DELETE_POLE({ commit }, documentPoleId) {
      window.console.log('ACTION_DELETE_POLE => ' + documentPoleId)
      try {
        const response = await Services.DeletePole(documentPoleId)
        if (response.success) {
          return response
        }
      } catch (error) {}
    },
  },
  getters: {
    GET_POLES(state) {
      return state.ListPoles
    },
    GET_POLE_BYID: (state) => (PoleId) => {
      return state.ListPoles.filter((el) => el.PoleId === PoleId)
    },
  },
}
