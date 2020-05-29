<template>
  <VTextField
    :label="field.caption"
    :type="field.type"
    :rules="rules"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { StringField } from '@/utils/types'

@Component
export default class VFilterField extends Vue {
  @Prop({ required: true })
  public field!: StringField

  get values () {
    return this.field.value
  }

  public rules = [
    (value: string) => (!this.values || !this.values.like) ? true : value && value.includes(this.values.like) ? true : `Значение должно содержать «${this.values.like}»`,
    (value: string) => (!this.values || !this.values.eq) ? true : value === this.values.eq ? true : `Значение должно быть «${this.values.eq}»`,
    (value: string) => (!this.values || !this.values.neq) ? true : value !== this.values.neq ? true : `Значение не должно быть «${this.values.neq}»`
  ]
}
</script>
