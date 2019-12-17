import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  user: {},
  isSignedIn: false
}
const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setIsSignedIn(state, isSignedIn) {
    state.isSignedIn = isSignedIn;
  }
}
const actions = {
  doSetUser({ commit }, user) {
    commit('setUser', user)
  },
  doSetIsSignedIn({ commit }, isSignedIn) {
    commit('setIsSignedIn', isSignedIn)
  }
}
const getters = {
  user(state) {
    return state.user;
  },
  isSignedIn(state) {
    return state.isSignedIn;
  }
}

Vue.use(Vuex)

export default new Vuex.Store({ state, mutations, actions, getters })