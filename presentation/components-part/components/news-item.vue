

<template lang="html">
  <div class="item">
    <img :src="news.image" :alt="news.title">
    <h2>{{ news.title }}</h2>
    <p>{{ news.lead }}</p>
  </div>
</template>

<script>
export default {

  props: {
    news: {
      type: Object
    }
  }

}
</script>

<style lang="css">
</style>
