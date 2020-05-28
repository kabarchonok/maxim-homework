<template>
  <v-app-bar
    app
    dark
  >
    <v-app-bar-nav-icon @click="switchDrawer" />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Emit, Model } from 'vue-property-decorator'

@Component({
  data () {
    return {
      title: process.env.VUE_APP_TITLE
    }
  }
})
export default class TheHeader extends Vue {
  @Model('switch-drawer', { type: Boolean })
  readonly drawer!: boolean

  @Emit()
  switchDrawer () {
    return !this.drawer
  }
}
</script>
