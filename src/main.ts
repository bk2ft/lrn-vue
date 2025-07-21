import './assets/main.css'
import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { ApolloClients } from '@vue/apollo-composable'
import { apolloClient } from '@/apolloClient'
import { apolloClientRm } from '@/apolloClientRm'
import BackLink from '@/components/BackLink.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/scss/main.scss'

import App from './App.vue'
const pinia = createPinia()
const app = createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient,
      rmClient: apolloClientRm,
    })
  },
  render: () => h(App),
})
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
