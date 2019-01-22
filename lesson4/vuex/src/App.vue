<template>
  <div id="app">
    {{ count }}
    <button @click='setCount(1)' type="button" name="button">1</button>
    <button @click='setCount(2)' type="button" name="button">2</button>
    <button @click='setCount(3)' type="button" name="button">3</button>

    <hello-world>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import { mapState } from 'vuex';

export default {
  name: 'app',

  components: {
    HelloWorld,
  },

  computed: mapState({
    count: state => {
      return state.count.count;
    }
  }),

  methods: {
    setCount: function(count) {

      const obj = {
        count: count,
        type: 'SET_COUNT_PLUS'
      }

      this.$store.dispatch('setCount', obj)
    }
  }

};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
