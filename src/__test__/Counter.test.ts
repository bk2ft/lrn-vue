import { render, fireEvent } from '@testing-library/vue'
import Counter from '../components/Counter.vue'
import { describe, it } from 'vitest'

describe('Counter.vue', () => {
  it('renders initial count and increments on click', async () => {
    const { getByText } = render(Counter)

    getByText('Count: 0')

    const button = getByText('Increment')
    await fireEvent.click(button)

    getByText('Count: 1')
  })
})