<template>
  <div class="count-component">
    <p>Count from another Component: {{ count }}</p>
    <p>Count from another Component (option store): {{ countOpt }}</p>
  </div>
</template>

<script setup>
import { useCounterStore, useCounterOptStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const storeOpt = useCounterOptStore()
const { count } = storeToRefs(store)
const { count: countOpt } = storeToRefs(storeOpt)
</script>

<style scoped>
.count-component {
  padding: 20px;
  margin: 10px 0;
  background: hsla(160, 100%, 37%, 1);
  color: black;
}
</style>
