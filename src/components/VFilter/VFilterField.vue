<template>
<div>
  <VTextField
    :label="caption"
    :type="type"
  />
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class VFilterField extends Vue {
  @Prop({ required: true })
  public code!: string

  @Prop({ required: true })
  public caption!: string

  @Prop({ required: true })
  public type!: 'number' | 'string' | 'bool'
}
</script>

<style scoped>

</style>
