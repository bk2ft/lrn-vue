<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Back to homepage</RouterLink>
</template>

<style scoped>
a {
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}
</style>
