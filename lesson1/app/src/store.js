import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
  },
  mutations: {
    SET_LIST(state, value) {
      state.list = value;
    },
  },
  actions: {
    setItems( { state, commit }, list ) {
      commit('SET_LIST', list);
    },
  },
});
