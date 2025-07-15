import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import BackLink from '@/components/BackLink.vue'

import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
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
