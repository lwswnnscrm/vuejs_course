export const state = () => ({
  counter: 0,
});

export const mutations = {
  ADD_COUNT(state) {
    state.counter += state.counter;
  },
};
