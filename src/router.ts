import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import HomeWeb from '@/views/HomeWeb.vue'
import Learnings from '@/views/Learnings.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'HomeWeb',
    component: HomeWeb,
    meta: {
      title: 'About this App',
      description: 'Description of About this App',
    },
  },
  {
    path: '/learning/:slug',
    name: 'Learning',
    component: Learnings,
    meta: {
      title: 'Learnings',
      description: 'Description of Learnings',
    },
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const { title, description } = to.meta
  const defaultTitle = 'Vue App'
  const defaultDescription = 'Default Description'

  document.title = (title as string) || defaultTitle

  const descriptionElement = document.querySelector('head meta[name="description"]')

  descriptionElement?.setAttribute('content', (description as string) || defaultDescription)
})

export default router
