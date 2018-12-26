import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


//Импортируем пакеты
import BootstrapVue from 'bootstrap-vue';
import VuejsDialog from 'vuejs-dialog';
import Notifications from 'vue-notification';

//Регистрируем их для использования в vue
Vue.use(BootstrapVue);
Vue.use(VuejsDialog);
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
