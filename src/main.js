import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Swal from 'sweetalert2';
import './firebase'
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()



Vue.config.productionTip = false;
Vue.prototype.$swal = Swal;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
