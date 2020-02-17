import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    StoreSearchForm: {} // 搜索内容
  },
  getters: {
    StoreSearchForm: state => state.StoreSearchForm,
  },
  mutations: {
    SET_StoreSearchForm: (state, StoreSearchForm) => {
      state.StoreSearchForm = StoreSearchForm
    },
  },
  actions: {

  }
})
