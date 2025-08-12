<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import gsap from 'gsap'
import { useGlobalStore } from '@/stores/global'
import NavApp from '@/components/NavApp.vue'
import routes from '../../data/nav.json'
const name = import.meta.env.VITE_APP_NAME
const strap = import.meta.env.VITE_APP_STRAP
const store = useGlobalStore()
const { height, navPos } = storeToRefs(store)

const handleWindowSizeChange = () => {
  store.resizeGlobal({})
  resizeReset()
}
const opacity = ref(0)
onMounted(() => {
  window.addEventListener('resize', handleWindowSizeChange)
  resizeReset()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowSizeChange)
})

const resizeReset = () => {
  const heightIfNum = typeof window.innerHeight == 'number' ? window.innerHeight : 0
  const widthIfNum = typeof window.innerWidth == 'number' ? window.innerWidth : 0
  return store.resizeGlobal({
    top: heightIfNum / 2.7 + 140 || 0,
    height: heightIfNum || 0,
    right: 500,
    bottom: 'auto',
    left: widthIfNum / 2 - 70 || 0 + 'px',

    navPos: {
      top: heightIfNum / 2.7 + 140 || 0,
      right: 'auto',
      bottom: 'auto',
      left: widthIfNum / 2 - 20 || 0,
    },
  })
}

function beforeEnter(el: any) {
  el.style.opacity = '0'
}

// where the animation will end up
function enter(el: any) {
  gsap.to(el, {
    duration: 1.4,
    opacity: 1,
    onComplete() {
      gsap.to('.nav', {
        duration: 1.4,
        opacity: 1,
        onComplete() {
          opacity.value = 1
        },
      })
    },
  })
}
</script>

<template>
  <div class="selected homeme dark app" id="homeweb" :style="{ height: height + 'px' }">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div class="inner">
        <div class="content">
          <div class="content">
            <div
              class="gallery-text"
              :style="{ paddingTop: height && (height as number) / 2.7 + 'px' }"
            >
              <div
                class="flex-grow-1 d-flex align-items-center justify-content-center search-image-container-full"
              >
                <div className="text">
                  <h2>{{ name }}</h2>
                  <p class="pb-2 mb-0 large">{{ strap }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div
      class="r d-inline nav"
      :style="{
        left: (navPos?.left as number) - 20 + 'px' || 0 + 'px',
        right: navPos?.right + 'px',
        top: navPos?.top + 'px',
        bottom: navPos?.bottom + 'px',
        opacity,
      }"
    >
      <NavApp :routes="routes.main" />
    </div>
  </div>
</template>

<style scoped></style>
