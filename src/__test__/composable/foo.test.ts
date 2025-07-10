import { expect, test, describe } from 'vitest'
import { withSetup } from '@/composables/test.utils'
import { useFoo } from '@/composables/foo'

describe('useFoo with setup', () => {
  test('useFoo', () => {
    const [result, app] = withSetup(() => useFoo(123)) as any
    // mock provide for testing injections
    app?.provide('foo', 0)
    // run assertions
    expect(result?.foo.value).toBe(123)
    // trigger onUnmounted hook if needed
    app?.unmount()
  })
})
