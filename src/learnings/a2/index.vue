<script setup>
import gsap from 'gsap'
import { useRouter } from 'vue-router'
let elem = null
const router = useRouter()

function onClick() {
  console.log('clicked')
  gsap.to(elem, {
    duration: 0.7,
    y: '120vh',
    opacity: 0,
    onComplete: () => router.push('/learning/a3'),
  })
}

function beforeEnter(el) {
  el.style.opacity = '0'
  el.style.transform = 'translateY(calc(100vh + 100px))'
}

// where the animation will end up
function enter(el) {
  elem = el
  gsap.to(el, {
    duration: 1.4,
    y: '0',
    opacity: 1,
  })
}
</script>

<template>
  <button @click="onClick">Page 2</button>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <h1>Transition Page 1</h1>
  </transition>
</template>
