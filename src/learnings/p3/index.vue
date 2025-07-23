<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useGlobalStore } from '@/stores/global'
import { storeToRefs } from 'pinia'

const store = useGlobalStore()
const { title, jwt, user, nav, width, height, navPos, top, left, right, bottom, section } =
  storeToRefs(store)

const changeGlobals = () => {
  const storeRoles = user.value.roles
  const newRole = 'global'
  const roles = !storeRoles.includes(newRole) ? [...storeRoles, newRole] : storeRoles
  store.loadGlobal({
    title: "Matt's App",
    // jwt,
    user: { name: 'matt', roles },
    // nav,
  })
}

const handleWindowSizeChange = () => {
  store.resizeGlobal({
    navPos: {
      top: (typeof window.innerHeight == 'number' && window.innerHeight / 2.7 + 140) || 0,
      right: 'auto',
      bottom: 'auto',
      left: (typeof window.innerWidth == 'number' && window.innerWidth / 2 - 70) || 0,
    },
  })
}

onMounted(() => {
  window.addEventListener('resize', handleWindowSizeChange)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowSizeChange)
})
</script>
<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ jwt }}</p>
    <p>{{ user }}</p>
    <p>{{ nav }}</p>
    <p>{{ width }}</p>
    <p>{{ height }}</p>
    <p>{{ navPos }}</p>
    <p>{{ top }}</p>
    <p>{{ left }}</p>
    <p>{{ right }}</p>
    <p>{{ bottom }}</p>
    <p>{{ section }}</p>
  </div>
  <button @click="changeGlobals">Change Globals</button>
</template>
