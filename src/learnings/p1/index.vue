<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Name: {{ name }}</p>
    <p>Double it: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
    <p>Count: {{ countOpt }}</p>
    <p>Name: {{ nameOpt }}</p>
    <p>Double it: {{ doubleCountOpt }}</p>
    <button @click="incrementOpt">Increment (option store)</button>
  </div>
  <CountDisplay />
</template>

<script setup>
import { useCounterStore, useCounterOptStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import CountDisplay from './CountDisplay.vue'

const store = useCounterStore()
const storeOpt = useCounterOptStore()
// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { name, doubleCount, count } = storeToRefs(store)
const { name: nameOpt, doubleCount: doubleCountOpt, count: countOpt } = storeToRefs(storeOpt)
const { increment } = store
const { increment: incrementOpt } = storeOpt
</script>
