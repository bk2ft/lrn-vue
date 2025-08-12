<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconAbout from '@/components/icons/IconAbout.vue'
const props = defineProps({
  routes: Object,
})
const { routes } = props
console.log(routes)
</script>

<template>
  <!-- <h2>{{ msg || 'No props passed yet' }}</h2> -->
  <!-- <div :class="`btn btn-nav btn-inline ${activeClass} ${disClass}`"> -->
  <div :class="`btn btn-nav btn-inline`">
    <RouterLink :to="routes[4].link">
      <!-- <Link
                to={to}
                onClick={redirect ? onClick : noClick}
                onMouseOver={setOn}
                onMouseOut={setOff}
            > -->
      <div className="d-inline-block" :style="{ width: '20px' }">
        <div className="svg-container">
          <IconAbout />
        </div>
      </div>
      <!-- <p>
      {{ routes[1].title }} -->
      <!-- {buttonText} -->
      <!-- {/* {useContext(JediContext)} */}
                    {/* {fillColor} */}-->
      <!-- </p> -->
      <!-- </Link> -->
    </RouterLink>
  </div>
</template>
