<template>
  <VFormBuilder
    class="FormBuilder"
    :fields="fields"
    @save-field="saveField"
    @remove-field="removeField"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VFormBuilder from '@/components/VFormBuilder'
import { Field } from '@/utils/types'

@Component({
  components: { VFormBuilder }
})
export default class EditView extends Vue {
  get fields (): Field[] {
    return this.$store.getters['form/fields']
  }

  saveField (field: Field) {
    const action = field.code ? 'form/editField' : 'form/createField'

    this.$store.commit(action, field)
  }

  removeField (code: string) {
    this.$store.commit('form/removeField', code)
  }
}
</script>

<style scoped>
.FormBuilder {
  max-width: 800px;
  margin: auto;
}
</style>
