<template>
  <component
    :is="tag"
    :field="field"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VFilterStringField from './VFilterStringField.vue'
import VFilterNumberField from './VFilterNumberField.vue'
import VFilterBooleanField from './VFilterBooleanField.vue'
import { Field } from '@/utils/types'

@Component({
  components: {
    VFilterStringField,
    VFilterNumberField,
    VFilterBooleanField
  }
})
export default class VFilterField extends Vue {
  @Prop({ required: true })
  public field!: Field

  get tag (): string {
    switch (this.field.type) {
      case 'string':
        return 'VFilterStringField'
      case 'number':
        return 'VFilterNumberField'
      case 'bool':
        return 'VFilterBooleanField'
      default:
        return 'VFilterStringField'
    }
  }
}
</script>
