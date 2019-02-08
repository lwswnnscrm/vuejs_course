<template lang="html">
  <div>
    <input type="text" v-model='searchQ'>
    <donor-item v-for='donor in donors' :donor='donor.attributes' :id='donor.id' :key='donor.id'>
    </donor-item>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

import donorItem from './donors-item.vue';

export default {

  data() {
    return {
      searchQ: ''
    }
  },

  watch: {
    searchQ: function() {
      let obj = {
        campaignId: this.campaignId,
        getParams: `?extend=organization&extend=level&extend=team?extend=organization&extend=level&extend=team&sortBy=-time&limit=10&searchQ=${this.searchQ}`,
      };
      this.getDonorsList(obj)
    }
  },

  components: {
    donorItem
  },

  computed: {
    ...mapState({
      campaignId: state => state.campaign.campaign.id,
      donors: state => state.donors.donors,
    }),
  },

  methods: {

    ...mapActions({
      getDonors: 'getDonors',
    }),

    callToApiGetDonors() {
      let obj = {
        campaignId: this.campaignId,
        getParams: '?extend=organization&extend=level&extend=team?extend=organization&extend=level&extend=team&sortBy=-time&limit=10',
      };
      //this.getDonors(obj);
      this.$store.dispatch('getDonors', obj);
    },
  },

  created() {
    this.callToApiGetDonors();
  },

};
</script>

<style lang="css">
</style>
