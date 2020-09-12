import Vue from 'vue'
import MagicGrid from 'vue-magic-grid'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(MagicGrid)
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
