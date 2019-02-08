<template lang="html">
  <div>
    {{ title }}
    {{ calcDate }}
    <slick ref="slick" :options="slickOptions">
      <div class="slick-el-div" v-for='image in images' :key='image.id'>
        <img :src="image.src" alt="#">
      </div>
    </slick>
    <p>{{ goal }}</p>
    <p>{{ total }}</p>
    <b-progress :value="progress" :max="100" class="mb-3"></b-progress>
    {{ progress }}
  </div>
</template>

<script>

import Slick from 'vue-slick';

import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';

import moment from 'moment';

export default {

  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        accessibility: false,
      },
      calcDate: null,
    };
  },

  components: {
    Slick
  },

  computed: {
    ...mapState({
      // title: state => state.campaign.campaign.attributes.title,
      title: function() {
        return this.$store.state.campaign.campaign.attributes.title;
      },
      goal: state => state.campaign.campaign.attributes.rounds[0].goal,
      total: state => state.campaign.campaign.relationships.campaign_stats.data.total,
    }),



    ...mapGetters({
      // imagesGet: 'getImage',
      getStatus: 'getCampaignStatus',
      getCalcDate: 'getCalcDate'
    }),

    images() {
      return this.$store.getters.getImage('campaign_hero');
      // return this.imageGet('campaign_hero');
    },

    progress() {
      return this.total / this.goal * 100;
    },

    status() {
      return this.getStatus(new Date());
    },
  },

  methods: {
    calcDateMethods() {
       const { time, status } = this.getCalcDate(this.status);
       this.calcDate = time;
    }
  },

  created() {
    setInterval( () => {
      this.calcDateMethods();
    }, 1000 )
  }

}
</script>

<style lang="scss">
  @import '~slick-carousel/slick/slick.css';
  @import '~slick-carousel/slick/slick-theme.css';

  .slick-el-div {
    width: 1170px;
    height: 400px;
    img {
      width: 100%;
      max-height: 100%;
    }
  }
</style>
