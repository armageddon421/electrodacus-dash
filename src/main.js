import Vue from 'vue'
import MagicGrid from 'vue-magic-grid'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueSSE from 'vue-sse'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSave, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faSave)
library.add(faInfoCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(MagicGrid)
Vue.use(VueAxios, axios)
Vue.use(VueSSE)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
