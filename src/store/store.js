import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  user: {},
  isSignedIn: false
}
const mutations = {
  setUser(state, user) {
    console.log('setUser')
    state.user = user;
  },
  setIsSignedIn(state, isSignedIn) {
    console.log('setIsSignIn')
    state.isSignedIn = isSignedIn;
  }
}
const actions = {
  doSetUser({ commit }, user) {
    console.log('doSetUser')
    commit('setUser', user)
  },
  doSetIsSignedIn({ commit }, isSignedIn) {
    console.log('doSetIsSignedIn')
    commit('setIsSignedIn', isSignedIn)
  }
}
const getters = {
  user(state) {
    console.log('getters')
    return state.user;
  },
  isSignedIn(state) {
    console.log('getters')
    return state.isSignedIn;
  }
}

Vue.use(Vuex)

export default new Vuex.Store({ state, mutations, actions, getters })