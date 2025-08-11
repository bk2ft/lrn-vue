<script setup lang="ts">
import gsap from 'gsap'
import { RouterLink, useRouter } from 'vue-router'
let elem: gsap.TweenTarget = null
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
      onComplete() {
        router.push('/learning/a2')
      },
    })
}

function beforeEnter(el: Element) {
  const hel = el as HTMLElement
  hel.style.transform = 'translateX(calc(100vw + 100px))'
  hel.style.display = 'inline-block'
}

// where the animation will end up
function enter(el: gsap.TweenTarget) {
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
    <template>
      <h1>Transition Page 2</h1>
      <RouterLink :to="`/home`">dedicated homepage example</RouterLink>
    </template>
  </transition>
</template>
