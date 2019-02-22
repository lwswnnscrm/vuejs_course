<template lang="html">
  <div class="">
    {{ count }}
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {

  computed: {
    ...mapState({
      count: state => state.counter,
    }),
  },

};
</script>

<style lang="css">
</style>
