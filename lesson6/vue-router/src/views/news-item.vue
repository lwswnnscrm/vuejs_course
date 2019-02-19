<template lang="html">
  <h1>
    News Item {{ newsId }}
  </h1>
</template>

<script>
export default {
  computed: {
    newsId() {
      return this.$route.params.id;
    },
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style lang="css">
</style>
