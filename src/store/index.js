import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: "",
    products: [],
    email: ""
  },
  mutations: {
    storeToken(state,token) {
        state.token = token
      },
      storeProduct(state, product) {
        state.products.push(product);
      },
      updateProducts(state, product) {
        state.products = product
      },
      storeEmail(state, email) {
        state.email = email
      },
     emptyProducts(state) {
        state.products = []
      },
  },
  actions: {
    storeToken(context, token) {
        context.commit('storeToken', token)
      },
      storeProduct(context, product) {
        context.commit('storeProduct', product)
      },
      updateProducts(context, product) {
        context.commit('updateProducts', product)
      },
      emptyProducts(context) {
        context.commit('emptyProducts')
      },
      storeEmail(context, email) {
        context.commit('storeEmail', email)
      }
  },
  getters: {
    getToken(state) {
        return state.token
      },
      getProducts(state) {
        return state.products
      },
    getTotal (state) {
        let cash = 0;
        for (let i = 0; i < state.products.length; i++) {
          cash = cash + state.products[i].price;
        }
        return cash;
    },
    getEmail (state) {
        return state.email
    }
  }
})