import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Swal from 'sweetalert2';
import './firebase'

Vue.config.productionTip = false;
Vue.use(Swal);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
