<template>
  <div class="hello">
    {{ countUnderDiv }}


    <button @click='setCount(7)' type="button" name="button">7</button>
    <button @click='setCount(8)' type="button" name="button">8</button>
    <button @click='setCount(9)' type="button" name="button">9</button>
  </div>


</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  computed: mapState({
    countUnderDiv: state => {
      console.log(state)
      return state.count.count;
    }
  }),

  methods: {
    setCount: function(count) {

      const obj = {
        count: count,
        type: 'SET_COUNT_MINUS'
      }

      this.$store.dispatch('setCount', obj)
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
