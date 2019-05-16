import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  plugins: [createPersistedState()],
  getters: {
  },
  mutations: {
  },
  actions: {

  }
})
