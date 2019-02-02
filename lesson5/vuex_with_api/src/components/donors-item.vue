<template lang="html">
  <div class="donors-item">
    <p>{{ name }}</p>
    <p>{{ donor.currency_sign + donor.total }}</p>
  </div>
</template>

<script>
export default {
  props: {
    donor: {
      type: Object,
      required: true,
      default: () => {
        return {
          name: 'Anonim'
        }
      }
    },
  },

  computed: {
    name() {
      return `${this.donor.name} 123`;
    }
  },

  created() {

  },
};
</script>

<style lang="css">
</style>
