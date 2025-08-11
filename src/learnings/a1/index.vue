<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <h1>GreenSock Animation Library</h1>
  </transition>
</template>

<script lang="ts">
import gsap from 'gsap'

export default {
  methods: {
    // where the animation will start from
    beforeEnter(el: Element) {
      const hel = el as HTMLElement
      hel.style.opacity = '0'
      hel.style.transform = 'translateY(calc(100vh + 100px))'
    },
    // where the animation will end up
    enter(el: gsap.TweenTarget) {
      gsap.to(el, {
        duration: 1.4,
        y: '5vh',
        opacity: 1,
      })
    },
  },
}
</script>
