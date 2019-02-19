<template lang="html">
  <div class="">
    {{ result }}
  </div>
</template>

<script>
import Vue from 'vue';

export default class Home extends Vue {

  get firstname() {
    'First name',
  },
  get lastname() {
    'Last name',
  },
  get result() {
    return `Result name ${this.firstname}, ${this.lastname}`;
  },

  methods: {

    callUser(obj = { name: '', number: 'none' }) {
      console.log(obj);
    }
  },

  created() {
    this.callUser()
  },

}
</script>

<style lang="css">
</style>
