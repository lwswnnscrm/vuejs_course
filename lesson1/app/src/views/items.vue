<template lang="html">
  <div class="contact">
    <!-- Выводим выбранный цвет как иконку юзера если его нет будет стандартный цвет который мы задали стилями  -->
    <div class="icon-user" :style='{ background: contact.color }'>
      <!-- выводим первую букву юзера  -->
      {{ icontText }}
    </div>
    <div class="name-phone">
      <p>{{ contact.name }}</p>
      <p>{{ phoneFormat }}</p>
    </div>

    <button type="button" @click='deleteContact' class="delete"></button>
  </div>
</template>

<script>
export default {

  props: ['contact'],

  computed: {

    icontText() {
      //обрезаем все кроме 1й буквы
      return this.contact.name.slice(0, 1);
    },

    phoneFormat() {
      return this.contact.phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4");
    }

  },

  methods: {
    deleteContact() {
      //При нажатии на удалить мы передаем события удаления в компонент родителя
      //Куда передаем id элемента который нужно удалить
      this.$emit('delete-contact', this.contact)
    }
  }

}
</script>

<style lang="scss">

  // сново импорт переменных в компонент
  @import '@/style/_vars.scss';

  .contact {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid $grey;
    padding: 10px 0;
    position: relative;
    &:last-child {
      border-bottom: 0;
    }
    .name-phone {
      padding-left: 30px;
    }
    p {
      margin: 0;
      font-size: 12px;
      color: $dark;
      &:first-child {
        padding-bottom: 5px;
      }
    }
  }

  .icon-user {
    background: $grey;
    color: $dark;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    border-radius: 50%;
  }

  .delete {
    background: url('https://cdn.iconscout.com/icon/free/png-256/delete-737-475058.png') center center no-repeat;
    width: 25px;
    height: 25px;
    border: 0;
    background-size: 100%;
    outline: none;
    position: absolute;
    right: 0;
    outline: none;
  }

</style>
