<template lang="html">
  <div class="list-items">
    <news-item v-for='news in newsList'
      :key='news.id'
      :news='news'>
    </news-item>
  </div>
</template>

<script>
import news from '@/store/news.js'

import newsItem from './news-item.vue';

export default {

  components: {
    newsItem
  },

  computed: {

    newsList: () => {
      return news;
    }

  }

}
</script>

<style lang="css">
</style>
