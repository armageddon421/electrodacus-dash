import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MagicGrid from 'vue-magic-grid'

createApp(App)
  .use(router)
  .use(MagicGrid)
  .mount('#app')
