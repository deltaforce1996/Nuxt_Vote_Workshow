import Vuex from 'vuex'
import MODULE_USER from '../store/modules/user.permission'
import MODULE_POLE from '../store/modules/poles'
import MODULE_VOITE from '../store/modules/voites'
const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    modules: {
      MODULE_USER,
      MODULE_POLE,
      MODULE_VOITE,
    },
  })
}

export default createStore
