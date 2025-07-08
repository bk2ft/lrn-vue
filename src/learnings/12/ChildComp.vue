<script setup>
const props = defineProps({
  msg: String,
})
const { msg } = props
</script>

<template>
  <h2>{{ msg || 'No props passed yet' }}</h2>
</template>
