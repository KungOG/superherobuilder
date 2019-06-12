import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headNumber: 1,
    bodyNumber: 2,
    legNumber: 3
  },
  mutations: {
    setHeadNumber(state, number) {
      state.headNumber = number;
    },
    setBodyNumber(state, number) {
      state.bodyNumber = number;
    },
    setLegNumber(state, number) {
      state.legNumber = number;
    },

  },
  actions: {

  },

  getters: {
    getHeadNumber(state) {
      return state.headNumber;
    },
    getBodyNumber(state) {
      return state.bodyNumber;
    },
    getLegNumber(state) {
      return state.legNumber;
    },
  }
})
