import axios from 'axios';
import urls from '@/data/urls';

const state = {
  campaign: null,
  loadingCampaign: true,
};

const getters = {
  getImage: (state) => (tag) => {
    const images = state.campaign.relationships.media.data;
    const result = images.filter(el => el.tag === tag);
    return result;
  }
};

const mutations = {
  SET_DATA(state, value) {
    state.campaign = value;
  },
  SET_LOADING(state, value) {
    state.loadingCampaign = value;
  },
};

const actions = {
  getCampaign({ commit }, { idCampaign, getParams = '' }) {
    console.log(idCampaign, getParams)
    commit('SET_LOADING', true);
    axios.get(urls.hostApi + urls.getCampaign.replace(':id', idCampaign) + getParams)
      .then(response => {
        commit('SET_DATA', response.data.data);
        commit('SET_LOADING', false);
      })
  }
};

export default  {
  state,
  getters,
  mutations,
  actions,
};
