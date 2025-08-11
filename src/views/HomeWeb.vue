<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import gsap from 'gsap'
import { useGlobalStore } from '@/stores/global'
const name = import.meta.env.VITE_APP_NAME
const strap = import.meta.env.VITE_APP_STRAP
const store = useGlobalStore()
const { height } = storeToRefs(store)

const handleWindowSizeChange = () => {
  store.resizeGlobal({})
}

onMounted(() => {
  window.addEventListener('resize', handleWindowSizeChange)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowSizeChange)
})

function beforeEnter(el: any) {
  el.style.opacity = '0'
}

// where the animation will end up
function enter(el: any) {
  gsap.to(el, {
    duration: 1.4,
    opacity: 1,
  })
}
</script>

<template>
  <div class="selected homeme dark app" id="homeweb" :style="{ height: height + 'px' }">
    <div class="inner">
      <div class="content">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <div class="content">
            <div class="gallery-text" :style="{ paddingTop: height && height / 2.7 + 'px' }">
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
        </transition>
      </div>
    </div>

    <div class="r d-inline nav">
      <!-- <NavApp items={store.nav || []} navClick={navClick} /> -->
    </div>
  </div>
</template>

<style scoped></style>
