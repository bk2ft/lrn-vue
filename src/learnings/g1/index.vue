<script lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

export default {
  name: 'Gql',
  setup() {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY, {}, { clientId: 'rmClient' })
    return {
      result,
      loading,
      error,
    }
  },
}
</script>

<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <div v-else className="container">
    <div class="row">
      <template v-for="(character, index) in result.characters.results" :key="character.id">
        <div class="col-4">
          <img :src="character.image" style="width: 100%" />
          <p>
            {{ character.name }}
          </p>
        </div>
        <div class="w-100" v-if="(index + 1) % 3 == 0"></div>
      </template>
    </div>
  </div>
</template>
