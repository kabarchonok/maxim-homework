<template>
  <VTextField
    :label="field.caption"
    :type="field.type"
    :rules="rules"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { NumberField } from '@/utils/types'

@Component
export default class VFilterNumberField extends Vue {
  @Prop({ required: true })
  public field!: NumberField

  get values () {
    return this.field.value
  }

  public rules = [
    (value: string) => (!this.values || !this.values.qt) ? true : (Number(value) > this.values.qt) ? true : `Значение должно не быть менее ${this.values.qt}`,
    (value: string) => (!this.values || !this.values.lt) ? true : (Number(value) < this.values.lt) ? true : `Значение должно не быть более ${this.values.lt}`,
    (value: string) => (!this.values || !this.values.qte) ? true : (Number(value) >= this.values.qte) ? true : `Значение должно быть больше или равно  ${this.values.qte}`,
    (value: string) => (!this.values || !this.values.lte) ? true : (Number(value) <= this.values.lte) ? true : `Значение должно быть меньше или равно  ${this.values.lte}`,
    (value: string) => (!this.values || !this.values.eq) ? true : (Number(value) === this.values.eq) ? true : `Значение должно быть равно ${this.values.eq}`,
    (value: string) => (!this.values || !this.values.neq) ? true : (Number(value) !== this.values.neq) ? true : `Значение должно не быть равно ${this.values.neq}`
  ]
}
</script>
