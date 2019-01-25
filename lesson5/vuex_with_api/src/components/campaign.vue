<template lang="html">
  <div>
    {{ title }}
    <slick ref="slick" :options="slickOptions">
      <div class="slick-el-div" v-for='image in images' :key='image.id'>
        <img :src="image.src" alt="#">
      </div>
    </slick>
  </div>
</template>

<script>

import Slick from 'vue-slick';

import { mapState, mapGetters } from 'vuex';

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
    };
  },

  components: {
    Slick
  },

  computed: {
    ...mapState({
      title: state => state.campaign.campaign.attributes.title,
    }),

    ...mapGetters({
      imagesGet: 'getImage'
    }),

    images() {
      return this.imagesGet('campaign_hero');
    }
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
