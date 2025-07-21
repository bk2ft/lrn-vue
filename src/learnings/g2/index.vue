<script>
import gql from 'graphql-tag'
import { watch } from 'vue'
import { useSubscription } from '@vue/apollo-composable'

const INC_SUBSCRIPTION = gql`
  subscription Subscription {
    numberIncremented
  }
`

export default {
  setup() {
    const { result, loading, error } = useSubscription(INC_SUBSCRIPTION)

    watch(
      result,
      (data) => {
        console.log('New message received:', data.numberIncremented)
      },
      {
        lazy: true, // Don't immediately execute handler
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
