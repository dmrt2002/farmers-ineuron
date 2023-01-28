import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: ""
  },
  mutations: {
    storeToken(state,token) {
        state.token = token
      },
  },
  actions: {
    storeToken(context, token) {
        context.commit('storeToken', token)
      },
  },
  getters: {
    getToken(state) {
        return state.token
      },
  }
})