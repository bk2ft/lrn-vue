import { render, screen } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { userEvent } from '@testing-library/user-event'

describe('Home view', () => {
  it('should navigate using router links', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: { template: 'Home' } },
        { path: '/learning/1', component: { template: 'Learning page 1' } },
      ],
    })

    render(Home, {
      global: {
        plugins: [router],
      },
    })
    const user = userEvent.setup()
    expect(router.currentRoute.value.path).toBe('/')

    await router.isReady()
    await user.click(screen.getByText('Learnings'))
    expect(router.currentRoute.value.path).toBe('/learning/1')
    // screen.debug()
    expect(await screen.findByText('You did it!')).toBeDefined()
  })
})
