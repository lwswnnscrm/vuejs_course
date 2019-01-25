<template>
  <div id="app" v-if='!loading'>
    <h4>
      {{ title }}
    </h4>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app',

  computed: mapState({
    loading: state => state.campaign.loadingCampaign,
    title: state => {
      console.log(state.campaign.campaign.attribute);
      return state.campaign.campaign.attribute.title;
    },
  }),

  created() {
    this.$store.dispatch('getCampaign');
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
