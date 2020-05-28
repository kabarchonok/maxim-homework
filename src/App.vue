<template>
  <VApp id="app">
    <TheNavigation :drawer="drawer" />
    <TheHeader v-model="drawer" />
    <VContent>
      <VContainer fluid>
        <RouterView />
      </VContainer>
    </VContent>
  </VApp>
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}
</style>
<script lang="ts">
import TheHeader from '@/components/TheHeader'
import TheNavigation from '@/components/TheNavigation'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    TheHeader,
    TheNavigation
  }
})
export default class App extends Vue {
  drawer = true
}
</script>
