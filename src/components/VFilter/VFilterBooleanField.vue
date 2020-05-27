<template>
  <VCheckbox
    :label="field.caption"
    :rules="rules"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { BooleanField } from '@/utils/types'

@Component
export default class VFilterField extends Vue {
  @Prop({ required: true })
  public field!: BooleanField

  get values () {
    return this.field.value
  }

  public rules = [
    (value: boolean) => (!this.values || !this.values.eq) ? true : value === this.values.eq ? true : 'Поле должно быть выбрано'
  ]
}
</script>
