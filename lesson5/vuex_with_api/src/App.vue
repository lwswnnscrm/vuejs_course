<template>
  <div id="app" v-if='!loading'>
    <campaign>
    </campaign>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import campaign from './components/campaign.vue';

export default {
  name: 'app',

  components: {
    campaign
  },

  computed: mapState({
    loading: state => state.campaign.loadingCampaign,
  }),

  methods: {
    ...mapActions({
      getCampaign: 'getCampaign',
    }),

    callActionsGetCampaign() {
      const idCampaign = location.pathname.replace('/', '');
      const getParams = '?locate_by_shortlink=1&extend[]=share&extend[]=languages&extend[]=media&extend[]=organization&extend[]=metas&extend[]=largest_donation&extend[]=campaign_stats&extend[]=matchers&extend[]=donation_stream';
      const obj = {
        idCampaign,
        getParams,
      };
      this.getCampaign(obj);
    },
  },

  created() {
    this.callActionsGetCampaign();
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
