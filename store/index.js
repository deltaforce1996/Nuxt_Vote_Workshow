import Vuex from 'vuex'
import MODULE_USER from '../store/modules/user.permission'
import MODULE_POLE from '../store/modules/poles'
const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    modules: {
      MODULE_USER,
      MODULE_POLE,
    },
  })
}

export default createStore
