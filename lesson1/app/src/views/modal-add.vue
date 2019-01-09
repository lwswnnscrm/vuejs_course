<template lang="html">
  <b-modal id="modal-add" @hidden="clearData" ref='modalAddContacts' title="Add contact">

    <!-- вставляем кастомный header для модал подробней в документации  -->
    <div slot="modal-header">
        <h2>Add contact</h2>
    </div>

    <!-- вставляем кастомный footer для модал подробней в документации  -->
    <div slot="modal-footer" class="modal-footer--slot">
      <button class="modal-footer--slot__button-close modal-footer--slot__btn" type="button" @click='closeModal'>Close modal</button>
      <button class="modal-footer--slot__button-add modal-footer--slot__btn" form="form-add" type="submit">Save</button>
    </div>

    <!-- submit.prevent - метод который вызываеться перед submit формы,
        то есть e.preventDefault мы можем не писать для заглушки стандартного события
    -->

    <form @submit.prevent="addContacts" id='form-add'>
      <input type="text" v-model='contact.name' required placeholder="Имя">
      <input type="text" v-model='contact.phone' required placeholder="Телефон">
      <div class="color-pick">
        <input type="color" v-model='contact.color'>
        <span>
          Pick color contact
        </span>
      </div>
    </form>
  </b-modal>
</template>

<script>
export default {

  data() {
    return {
      contact: {
        id: 0,
        name: '',
        phone: '',
        color: ''
      }
    }
  },

  methods: {
    openModal() {
      // метод открытия модалки vue-bootstrap
      this.$refs.modalAddContacts.show();
    },

    openEditModal(data) {
      this.contact.name = data.name;
      this.contact.phone = data.phone;
      this.contact.color = data.color;
      this.contact.id = data.id;
      this.$refs.modalAddContacts.show();
    },

    closeModal() {
      // метод закрытия модалки vue-bootstrap
      this.$refs.modalAddContacts.hide();
    },

    clearData() {
      //метод который вызываеться после закрытия модального окна
      //в нем мы обнуляем данные которые заполнял пользователь
      this.contact = {
        id: 0,
        name: '',
        phone: '',
        color: ''
      }
    },

    addContacts() {
      if (this.contact.id === 0) {
        //метод который вызываеться при submit form,
        //this.$emit - передает события в родительский компонент
        //в данном случае мы передаем событие add-contact в месте с которым
        //отправляем объект this.contact который хранит информацию о нашем контакте


        //тут мы присваем в id нашего компонента unix time
        //подробней про unix time - https://ru.wikipedia.org/wiki/Unix-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F
        this.contact.id = new Date().getTime();

        this.$emit('add-contact', this.contact);

        //после того как отправили событие с контактом в родитель
        //вызываем метод который закроет наше модальное окно
        this.closeModal();
      } else {
        this.$emit('edit-contact', this.contact);
        this.closeModal();
      }
    }
  }

}
</script>

<style lang="scss" scoped>

  // сново импорт переменных в компонент
  @import '@/style/_vars.scss';

  h2 {
    font-size: 28px;
    color: $dark;
  }

  .modal-footer--slot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    &__btn {
      border: none;
      border-radius: 50px;
      background: $pink;
      color: $dark;
      width: 150px;
      height: 35px;
      line-height: 35px;
      outline: none;
    }
    &__button-add {
      background: $blue;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      border-radius: 0;
      padding: 5px 10px;
      border: 0;
      box-shadow: 0;
      border-bottom: 1px solid $pink;
      color: $dark;
      margin-bottom: 20px;
      outline: none;
    }

    input[type='color'] {
      padding: 0;
      border-bottom: 0;
      width: 50px;
      height: 50px;
      margin: 0;
    }
    .color-pick {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

</style>
