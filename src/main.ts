import './assets/main.css'
import { createApp } from 'vue'
import router from './router'
import BackLink from '@/components/BackLink.vue'

import App from './App.vue'
const app = createApp(App)
app.component('BackLink', BackLink) // no need to import elsewhere anymore

// Global error catching to aid development.
app.config.errorHandler = (err, vm, info) => {
  if (import.meta.env.DEV) {
    console.error('Error:', err)
    console.error('Vue component:', vm)
    console.error('Additional info:', info)
  }
}
app.use(router).mount('#app')
