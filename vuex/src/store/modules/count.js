
const state = {
  count: 0,
};

const mutations = {
  SET_COUNT_PLUS(state, value) {
    state.count = state.count + value;
  },
  SET_COUNT_MINUS(state, value) {
    state.count = state.count - value;
  },
};

const getters = {

};

const actions = {
  setCount({ state, commit }, obj) {
    const { type, count } = obj;
    commit(type, count)
  }
};

export default {
  state,
  mutations,
  getters,
  actions
}
