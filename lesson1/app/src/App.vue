<template lang="html">
  <list-app>
  </list-app>
</template>

<script>

import list from './views/list.vue';

export default {

  components: {
    'list-app': list
  }

}
</script>

<style lang="scss">
  // Подключаем стили наших пакетов
  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  @import '~vuejs-dialog/dist/vuejs-dialog.min.css';
</style>
