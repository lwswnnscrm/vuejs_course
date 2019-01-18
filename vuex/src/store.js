import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    list: [],
  },
  mutations: {
    SET_COUNT(state, value) {
      state.count = value;
    },
    APPEND_ITEM_LIST(state, value) {
      if (value.param === 'push') {
        state.list.push(value)
      } else {
        state.list.unshift(value)
      }

    }
  },
  getters: {

  },
  actions: {
    setCount({ state, commit }, newCount) {
      console.log(newCount)
      commit('SET_COUNT', newCount)
    }
  },
});
