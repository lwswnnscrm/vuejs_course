<template>
<div id="app">
  <b-form @submit.prevent="onSubmit">
    <b-form-group label="Email address:"
      description="We'll never share your email with anyone else.">
      <b-form-input type="email" v-model="form.email" required placeholder="Enter email">
      </b-form-input>
    </b-form-group>
    <b-form-group label="Your Name:" label-for="exampleInput2">
      <b-form-input type="text" v-model="form.name" required placeholder="Enter name">
      </b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>

  <hr>
    <h5> Count list: {{ getItemsCount }} </h5>
  <hr>
    <h5> Select contact</h5>
    <b-button variant='secondary' class="select-btn" v-for='item in items'
      :key='item.id' @click='selectButton(item.id)'>{{ item.name }}</b-button>
  <hr>
  <div v-if='item'>
    <h5>Name: {{ item.name }}</h5>
    <p>Email: {{ item.email }}</p>
    <hr>
  </div>

  <b-list-group>
    <b-list-group-item v-for='item in items' :key='item.id'>
      {{ item.name }}
      <div>
        <b-button size='sm' @click='replaceEl(item)'>Replace to random data</b-button>
        <b-button size='sm' @click='deleteEl(item)'>delete</b-button>
      </div>
    </b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions,
} from 'vuex';

export default {

  data() {
    return {
      form: {
        email: '',
        name: '',
        id: null,
      },
      selectedId: null,
    };
  },

  computed: {
    ...mapState({
      items: state => state.items.items,
    }),
    ...mapGetters({
      getItemsCount: 'itemsCount',
      getItem: 'item',
    }),
    item() {
      return this.getItem(this.selectedId);
    },
  },

  methods: {
    ...mapMutations({

    }),
    ...mapActions({
      setItem: 'setItem',
      deleteItem: 'deleteItem',
      replaceItem: 'replaceItem',
    }),
    onSubmit() {
      this.form.id = new Date().getTime();
      const objToPush = {
        ...this.form,
      };
      this.setItem(objToPush);
      this.form.email = '';
      this.form.name = '';
      this.form.id = null;
    },
    replaceEl(item) {
      const randomString = Math.random().toString(36).substring(7);
      const objToPush = {
        oldValue: item,
        value: {
          name: randomString,
          email: `${randomString}@gmail.com`,
          id: new Date().getTime(),
        },
      };
      this.replaceItem(objToPush);
    },
    deleteEl(item) {
      this.deleteItem(item);
    },
    selectButton(id) {
      this.selectedId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

#app {
  width: 700px;
  margin: 0 auto;
  hr {
    margin: 10px 0;
  }
  .select-btn {
    margin: 0px 5px;
  }
  /deep/ .list-group-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      margin: 5px;
    }
  }
}
</style>
