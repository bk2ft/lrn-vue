<script setup lang="ts">
import { shallowRef, watchEffect } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import learningsMeta from '@/learnings/meta.json'

const learningComponent = shallowRef()
const route = useRoute()
const router = useRouter()

watchEffect(async () => {
  try {
    learningComponent.value = (await import(`@/learnings/${route.params.slug}/index.vue`)).default
  } catch (err) {
    console.log(err)
    router.push('/400')
  }
})
</script>

<template>
  <div class="container">
    <main class="main-content"><component :is="learningComponent" /></main>
    <section class="left-sidebar">
      <nav>
        <BackLink />
        <ul class="top-nav">
          <li v-for="(learning, index) in learningsMeta" :key="index">
            <RouterLink :to="`/learning/${learning.slug}`">{{ learning.title }}</RouterLink>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<style scoped>
/* flexbox container */
.container {
  display: flex;
  flex-wrap: wrap;
}

/* columns (mobile) */
.container > * {
  width: 100%;
  padding: 1rem;
}

/* tablet breakpoint */
@media (min-width: 768px) {
  .container > .header {
    order: -2; /* header first */
  }
  .container > .left-sidebar {
    /* left sidebar before main content */
    order: -1;
    width: calc(100% / 3);
  }
  .container > .main-content {
    width: calc(100% / 3 * 2);
  }
}

.left-sidebar {
  max-width: 400px;
  order: -1;

  nav {
    ul {
      list-style: none; /* 6 */
      padding: 0;
      margin: 0;
      li {
        padding-left: 0rem; /* 7! */
        a {
          display: block;
          padding: 0.5rem 1rem; /* 3 */
        }
      }
    }
    > a {
      display: block;
      padding: 0.5rem 1rem; /* 3 */
      color: var(--vt-c-text-dark-2);
      &:hover {
        background: none;
      }
    }
  }
}
</style>
