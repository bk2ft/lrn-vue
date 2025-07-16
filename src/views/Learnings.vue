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
        <BackLink class="learning-back" />
        <div class="accordion" id="accordionExample1">
          <div
            class="accordion-item"
            v-for="(learningSection, index) in learningsMeta"
            :key="index"
          >
            <h2 class="accordion-header">
              <button
                :class="`accordion-button ${index != 0 && 'collapsed'}`"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#collapse${index}`"
                :aria-expanded="index == 0 ? 'true' : 'false'"
                :aria-controls="`#collapse${index}`"
              >
                {{ learningSection.title }}
              </button>
            </h2>
            <div
              :id="`collapse${index}`"
              :class="`accordion-collapse collapse ${index == 0 && 'show'}`"
              data-bs-parent="#accordionExample1"
            >
              <div class="accordion-body">
                <ol class="top-nav">
                  <li v-for="(learning, index) in learningSection.views" :key="index">
                    <RouterLink :to="`/learning/${learning.slug}`">{{ learning.title }}</RouterLink>
                    <a
                      v-if="learning.source && learning.source !== ''"
                      :href="learning.source"
                      target="_blank"
                      class="btn btn-primary btn-src"
                      >source</a
                    >
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
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
    padding-top: 50px;
  }
}

.left-sidebar {
  max-width: 400px;
  order: -1;

  nav {
    .learning-back {
      padding-bottom: 10px;
      display: block;
    }
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
  }
}
.btn-src {
  padding: 0.15rem 0.25rem;
  font-size: 0.65em;
  color: #0d6efd;
  background-color: #fff;
  border: 1px solid;
  border-radius: 0.25rem;
}
</style>
