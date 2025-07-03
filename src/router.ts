import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Learnings from '@/views/Learnings.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/learning/:slug',
    name: 'Learning',
    component: Learnings,
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
