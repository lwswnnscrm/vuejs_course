<template lang="html">
  <div class="app">
    <notifications group="foo" />
    <div class="app__list">
      <div class="app__top--control">
        <button type="button" name="button" @click='openModal' class="btn-add">+</button>
        <!--
          при клике на кнопку вызываем функцию коьторая вызвет наше модальное окно
        -->
        <input type="text" v-model='searchQ' class="app__top--search" placeholder="Поиск по контактам">
      </div>
      <div v-for='contact in filteredContacts'>
        <list-item v-if='contact.star' :key='contact.id' :ref='"item-" + contact.id' @delete-contact='deleteContact' @edit-star-val='editStar' @edit-contact='editContact' :contact='contact'>
        </list-item>
      </div>
      <div class="app__item--wrap">
        <!-- принимаем события удаления контакта и вызываем метод удаления контакта  -->
        <list-item v-for='contact in filteredContacts' :key='contact.id' :ref='"item-" + contact.id' @delete-contact='deleteContact' @edit-star-val='editStar' @edit-contact='editContact' :contact='contact'>
        </list-item>
      </div>
    </div>
    <!--
      добавляем компонент в нашу разметку
      ref это уникальный индификатор комопнента в vue
      с помощью ref мы можем обратиться к нашему модальшому окну
      и получить доступ к его методам для того чтоб открыть модалку как пример
      или провести другие манипуляции с модальным окном дальше в примере вы увидите
      как это использовать
      @add-contact - сокращенный синтаксис от v-on:add-contact
      теперь когда с модального окна произойдет событие add-contact
      которое мы передаем с помощью $emit тут оно отловиться и вызовиться метод в родителе
      addContact в котором мы уже и добавим новый контакт
    -->
    <modal-add ref='modalAdd' :topcontactcount='topContacts.length' @edit-contact='contactEdit' @add-contact='addContact'>
    </modal-add>
  </div>
</template>

<script>

import listItem from './items.vue';

//импортируем компонент с модалкой
import modalAdd from './modal-add.vue';


export default {

  data() {
    return {
      name: '',
      phone: '',
      searchQ: '',
      contactsList: []
    }
  },

  //регистрируем компонент модалки в нашем компоненте листа
  components: {
    listItem,
    modalAdd
  },

  watch: {
    contactsList: function() {
      // localStorage.setItem('contactList', JSON.stringify(this.contactsList));
      this.changeContactListVuex();
    },
  },

  computed: {

    filteredContacts() {
      const contactsList = this.contactsList;
      const searchQ = this.searchQ.toLowerCase();
      const filteredContacts = contactsList.filter(el => {
        return el.name.toLowerCase().indexOf(searchQ) !== -1;
      })
      return filteredContacts;
    },

    topContacts() {
      const allContacts = this.contactsList;
      const filtredContact = allContacts.filter(el => el.star);
      return filtredContact;
    }
  },
  methods: {
    openModal() {
      // this.$refs.modalAdd обращение к компоненту модального окна по его индификатору modalAdd
      // this.$refs - вернет все ref которые используються в компоненте
      // this.$refs.modalAdd.openModal() - обращение к метуду внутри модального окна openModal()
      this.$refs.modalAdd.openModal();
    },

    changeContactListVuex() {
      this.$store.dispatch('setItems', this.contactsList);
    },

    // editStar(contact) {
    //   if (this.topContacts.length > 2) {
    //     return false;
    //   } else {
    //     for(const [index, value] of this.contactsList.entries()) {
    //       if (value.id === contact.id) {
    //         this.contactsList[index].star = this.contactsList[index].star ? false : true;
    //       }
    //     }
    //   }
    //
    //   console.log(this.topContacts)
    // },

    // editContact(contact) {
    //   this.$refs.modalAdd.openEditModal(contact);
    // },

    // contactEdit(contact) {
    //   for(const [index, value] of this.contactsList.entries()) {
    //     if (value.id === contact.id) {
    //       this.contactsList[index].name = contact.name;
    //       this.contactsList[index].color = contact.color;
    //       this.contactsList[index].phone = contact.phone;
    //     }
    //   }
    // },

    // deleteContact(contact) {
    //   //Метод удаления контакта в которое мы передали conact которой тут и принимаем
    //
    //
    //
    //   const message = `Вы уверены что хотите удалить контакт ${contact.name}`
    //
    //   const options = {
    //     okText: 'Удалить',
    //     cancelText: 'Отменить',
    //   };
    //
    //
    //   // Запршиваем подтверждение удаления контакта у пользователя
    //   //С помощью vuejs-dialog
    //   this.$dialog.confirm(message, options).then(() => {
    //
    //     for (const [index, value] of this.contactsList.entries()) {
    //       if (value.id == contact.id) {
    //         this.contactsList.splice(index, 1);
    //         //Выводим уведомление у удалении контакта
    //         this.$notify({
    //           group: 'foo',
    //           title: `Контакт ${contact.name} успешно удален`
    //         });
    //
    //         break;
    //       }
    //     }
    //
    //   })
    //
    // },

    addContact(contact) {
      //метод принимает contact который мы передаем
      //в компоненте модального окна в родительский компонент(по сути этот в нашем примере)

      this.contactsList.push(contact);

      //Выводим уведомление о успешном добавлении контакта с помощью vue-notification
      this.$notify({
        group: 'foo',
        title: `Контакт ${contact.name} успешно добавлен`
      });

    }

  },

  created() {
    const contactsList = JSON.parse(localStorage.getItem('contactList'));
    if (contactsList) {
      this.contactsList = contactsList;
    }
  },

  mounted() {
    this.openModal();
  }

}
</script>

<style lang="scss" scoped>
  // импортируем файлик с переменными для стилей
  // если вы пишете стили в файлике, а не компоненте поступаем также
  // ВАЖНО: при  параметре scoped стили которые мы прописали в файле будут задействованы только в этом компоненте
  // если они нужны и в других убераем scoped или импортируем эти стили в каждый из файликов
  @import '@/style/_vars.scss';

  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $grey;
    height: 100vh;
    &__list {
      width: 400px;
      background: $white;
      padding: 25px;
      box-shadow: $box-shadow;
      border-radius: 5px;
      max-height: 90vh;
      position: relative;
    }
    &__item--wrap {
      max-height: 70vh;
      overflow-x: auto;
    }
    &__top--control {
      padding-bottom: 25px;
    }
    &__top--search {
      width: 100%;
      border: none;
      padding: 5px;
      box-shadow: 0;
      outline: none;
      border-bottom: 1px solid $pink;
      color: $dark;
    }
    .btn-add {
      width: 50px;
      height: 50px;
      background: $pink;
      color: #fff;
      border: 0;
      padding: 0;
      border-radius: 50%;
      font-size: 22px;
      line-height: 50px;
      margin: 0;
      text-align: center;
      position: absolute;
      top: -25px;
      right: -25px;
      cursor: pointer;
      box-shadow: $box-shadow;
    }
  }

  .name-phone {
    display: none !important;
  }

</style>
