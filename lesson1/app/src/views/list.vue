<template lang="html">
  <div class="">
    <input type="text" v-model='name' placeholder="name">
    <input type="text" v-model='phone' placeholder="phone">
    <input type="text" @input='searchEl' name="" value="">
    <button type="button" @click="addContacts()" name="button">Add contact</button>
    <div class="list">
      <list-item v-for='item in listItems' :key='item.id' :phone='item'>
      </list-item>
    </div>
  </div>
</template>

<script>

import listItem from './items.vue';

export default {

  data() {
    return {
      name: '',
      phone: '',
      listItems: [
        {
          id: 0,
          name: 'Vasya',
          tel: '0999999999'
        },
        {
          id: 1,
          name: 'Petya',
          tel: '0999999999'
        }
      ]
    }
  },

  methods: {
    addContacts() {
      const obj = {
        id: this.listItems.length + 1,
        name: this.name,
        tel: this.phone
      }
      this.listItems.push(obj);

      this.clearInput();
    },

    clearInput() {
      this.name = '';
      this.phone = '';
      alert('add new contact');
    },

    searchEl(e) {
      console.log(e.target.value);
    }
  },

  components: {
    listItem
  }

}
</script>

<style lang="css">
</style>
