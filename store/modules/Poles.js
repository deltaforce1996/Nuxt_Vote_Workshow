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
    ACTION_FETCH_LISTPOLES({ commit }) {
      Services.FecthPoles(Utils.BaseCollection)
        .then((res) => {
          if (res.status) {
            Promise.all(res.data).then((values) => {
              commit('FETCH_LIST_POLES', values)
              return { success: true, massage: 'New pole create success.' }
            })
          } else {
            return { success: false, massage: 'Created new pole failed.' }
          }
        })
        .catch((err) => {
          return { success: false, massage: err }
        })
    },
    async ACTION_CREATE_NEWPOLE({ commit }, payload) {
      const response = await Services.CreateNewPoles({
        collection: Utils.BaseCollection,
        pole: new Poles(
          payload.PoleId,
          payload.Path,
          payload.Description,
          Utils.DateToTimestamp(payload.Exp),
          payload.TimeStamp,
          payload.PoleName,
          payload.By,
          payload.ArrUser
        ),
      })
      if (response.success) {
        commit('INSERT_NEWPOLE', payload)
      }
      if (response) {
        return response
      }
    },
  },
  getters: {
    GET_POLES(state) {
      return state.permission
    },
    GET_POLE_BYID(state, PoleId) {
      return state.ListPoles.filter((el) => el.PoleId === PoleId)
    },
  },
}
