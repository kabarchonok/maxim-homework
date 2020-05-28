<template>
  <VForm>
    <VFilterField
      v-for="field in fields"
      :key="field.code"
      :field="field"
    />
  </VForm>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VFilterField from './VFilterField.vue'
import { Field } from '@/utils/types'

@Component({
  components: {
    VFilterField
  }
})
export default class VFilter extends Vue {
  @Prop({ required: true })
  public fields!: Field[]
}
</script>

<style scoped>

</style>
