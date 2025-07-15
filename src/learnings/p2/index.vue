<template>
  <div>
    <p>Independent count test from new route: {{ count }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count } = storeToRefs(store)
</script>
