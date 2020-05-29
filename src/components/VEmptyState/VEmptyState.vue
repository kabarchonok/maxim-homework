<template>
  <VCard
    class="EmptyState"
    tile
    elevation="0"
  >
    <VCardText>
      <div class="ma-10">
        <VIcon
          class="EmptyState__icon"
          color="grey lighten-1"
        >
          {{ icon }}
        </VIcon>
        <div class="headline grey--text darken-1">
          <slot>
            {{ message }}
          </slot>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class VEmptyState extends Vue {
  @Prop({ required: true })
  icon!: string

  @Prop()
  message?: string
}
</script>

<style scoped>
.EmptyState {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.EmptyState__icon {
  font-size: 150px;
}
</style>
