<script setup>
import gsap from 'gsap'
import { useRouter } from 'vue-router'
let elem = null
const router = useRouter()

function onClick() {
  console.log('clicked')
  gsap
    .timeline()
    .to(elem, {
      duration: 0.4,
      x: '10vw',
      y: '10vh',
    })
    .to(elem, {
      duration: 0.5,
      transformOrigin: 'center',
      rotation: 360,
    })
    .to(elem, {
      duration: 1.7,
      x: '120vw',
      opacity: 0,
      onComplete: () => router.push('/learning/a2'),
    })
}

function beforeEnter(el) {
  el.style.opacity = '0'
  el.style.transform = 'translateX(calc(100vw + 100px))'
  el.style.display = 'inline-block'
}

// where the animation will end up
function enter(el) {
  elem = el // assign to scoped variable so other methods can affect element
  gsap.to(el, {
    duration: 1.4,
    x: '0',
    opacity: 1,
  })
}
</script>

<template>
  <button @click="onClick">Page 1</button>
  <div class="w100"></div>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <h1>Transition Page 2</h1>
  </transition>
</template>
