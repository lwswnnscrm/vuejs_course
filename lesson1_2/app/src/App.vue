<template lang="html">
  <div class="app">
    <list-app>
    </list-app>
  </div>
</template>

<script>

import list from './views/list.vue';

export default {

  data: function() {
    return {
      text: ''
    }
  },

  components: {
    'list-app': list
  },

  methods: {
    test(name) {
      console.log(name);
    },

    loadFile(e) {
      console.log(e.target.files[0])
    }
  },

  beforeCreate: function() {
    // this.test('beforeCreate');
  },

  created: function() {
    console.log(document.querySelectorAll('.app'))
    this.test('create');
  },

  mounted: function() {
    console.log(document.querySelectorAll('.app'))
    this.test('mounted');
  },

  beforeUpdate: function() {
    console.log(this.text + 'beforeUpdate')
  },

  updated: function() {
    console.log(this.text + 'updated')
  }

}
</script>

<style lang="scss">
  // Подключаем стили наших пакетов
  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  @import '~vuejs-dialog/dist/vuejs-dialog.min.css';
</style>
