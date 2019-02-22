<template lang="html">
  <div class="news">
    <h1>
      News
    </h1>
    <router-link to="/news/1">News 1</router-link>
    <router-link to="/news/2">News 2</router-link>
    <router-link to="/news/3">News 3</router-link>
  </div>
</template>

<script>

import router from '@/router';

export default {

  created() {
    this.$router.push('/news/1')
  }

}
</script>

<style lang="css">
</style>
