import axios from 'axios';

const state = {
  campaign: null,
  loadingCampaign: true
}

const getters = {

}

const mutations = {
  SET_DATA(state, value) {
    state.campaign = value;
  },
  SET_LOADING(state, value) {
    state.loadingCampaign = value;
  }
}

const actions = {
  getCampaign({ commit }) {
    commit('SET_LOADING', true);
    axios.get('https://api.charidy.com/api/v1/campaign/mhmc?locate_by_shortlink=1&extend[]=donation_level&extend[]=share&extend[]=languages&extend[]=media&extend[]=organization&extend[]=metas&extend[]=largest_donation&extend[]=campaign_stats&extend[]=matchers&extend[]=donation_stream')
      .then(response => {
        commit('SET_DATA', response.data.data);
        commit('SET_LOADING', false);
      })
  }
}

export default  {
  state,
  getters,
  mutations,
  actions
}
