import { ref } from 'vue'

export function useFoo(amount: number) {
  const foo = ref(0)
  foo.value = foo.value + amount

  return {
    foo,
  }
}
