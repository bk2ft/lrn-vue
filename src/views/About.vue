<script setup lang="ts">
import { ref } from 'vue'
import NavApp from '@/components/NavApp.vue'

const greeting = ref('Hello from parent')
</script>

<template>
  <NavApp :msg="greeting" />
</template>
