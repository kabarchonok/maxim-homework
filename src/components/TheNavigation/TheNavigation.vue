<template>
  <v-navigation-drawer permanent :mini-variant="drawer" app>

  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  methods: {
    onInput () {
      console.log('input')
    }
  }
})
export default class TheNavigator extends Vue {
  @Prop({ required: true })
  public drawer!: boolean
}
</script>
