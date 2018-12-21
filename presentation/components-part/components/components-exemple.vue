<template lang="html">
  <div class="component">
    <div class="component__header">
      <h1>{{ title }}</h1>
    </div>
    <div class="component__body">
      <a :href="validateLink(link)">Instagram</a>
      <p>{{ (text) }}</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    title: () => 'Title for test component',
    text: () => 'Text for test component',
    link: () => 'https://www.instagram.com/user';
  },
  methods: {
    validateLink: (link) => {
      axios.get(link, {
        validateStatus: (status) => return status >= 200 && status < 300 ? link : 'https://www.instagram.com/';
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .component {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__header {
      padding: 20px 0;
      h1 {
        font-size: 28px;
        color: lightgrey;
        font-weight: bold;
      }
    }
  }
</style>
