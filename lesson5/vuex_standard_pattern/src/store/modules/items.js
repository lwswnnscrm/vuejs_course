const getters = {
  itemsCount: state => state.items.length,

  item: state => (id) => {
    const item = state.items.filter(el => el.id === id);
    return item.length > 0 ? item[0] : false;
  },
};

const mutations = {
  SET_ITEM(state, value) {
    state.items.push(value);
  },
  DELETE_ITEM(state, index) {
    state.items.splice(index, 1);
  },
  REPLACE_ITEM(state, { value, index }) {
    state.items.splice(index, 1, value);
  },
};

const actions = {
  setItem({ commit }, value) {
    commit('SET_ITEM', value);
  },

  deleteItem({ state, commit }, value) {
    const index = state.items.findIndex(el => el.id === value.id);
    commit('DELETE_ITEM', index);
  },

  replaceItem({ state, commit }, { oldValue, value }) {
    const index = state.items.findIndex(el => el.id === oldValue.id);
    const obj = {
      value,
      index,
    };
    commit('REPLACE_ITEM', obj);
  },
};

const state = {
  items: [
    {
      id: 1,
      name: 'Denis',
      email: 'lwswnnscrm@gmail.com',
    },
    {
      id: 2,
      name: 'Vasya',
      email: 'vasya@gmail.com',
    },
  ],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
