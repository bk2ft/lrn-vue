<script lang="ts">
import gql from 'graphql-tag'
import { watch } from 'vue'
import { useSubscription } from '@vue/apollo-composable'

const INC_SUBSCRIPTION = gql`
  subscription Subscription {
    numberIncremented
  }
`
interface Increment {
  numberIncremented: number
}
export default {
  setup() {
    const { result, loading, error } = useSubscription(INC_SUBSCRIPTION)

    watch(
      result,
      (data) => {
        const resData: Increment = data as unknown as Increment
        console.log('New message received:', resData.numberIncremented)
      },
      {
        //lazy by default & not supported by typescript. Trying 'eager' watcher for opposite effect instead
        // https://vuejs.org/guide/essentials/watchers#eager-watchers
        //lazy: true, // Don't immediately execute handler
        immediate: false,
      },
    )
    return { result, loading, error }
  },
}
</script>

<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <div v-else className="container">New message received: {{ result.numberIncremented }}</div>
</template>
