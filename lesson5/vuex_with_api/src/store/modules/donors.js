import axios from 'axios';
import urls from '@/data/urls';
const state = {
  donors: null,
  loadingDonors: true,
};

const getters = {

};

const mutations = {
  SET_DONORS(state, value) {
    state.donors = value;
  },
  SET_LOADING_DONORS(state, value) {
    state.loadingDonors = value;
  },
};

const actions = {
  getDonors({ commit }, { campaignId, getParams = '' }) {
    axios.get(
      urls.hostApi +
      urls.getDonationList.replace(':id', campaignId) +
      getParams
    )
      .then(response => {
        commit('SET_DONORS', response.data.data);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
