<template>
<div>
  <VCard>
    <VCardTitle>
      <VBtn class="primary" @click="openDialog">Добавить поле</VBtn>
    </VCardTitle>

    <VCardText>
      <VFormBuilderFields :fields="fields" @edit-item="editItem"/>
    </VCardText>
  </VCard>

  <VDialog v-model="dialog.active" persistent max-width="600px">
    <VFormBuilderModal :field="dialog.field" @close-dialog="closeDialog" @save-field="saveField"/>
  </VDialog>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FIELDS_FIXTURE from '@/fixtures/fields.json'
import VFormBuilderFields from '@/components/VFormBuilder/VFormBuilderFields.vue'
import VFormBuilderModal from '@/components/VFormBuilder/VFormBuilderModal.vue'
import { Field } from '@/utils/types'

@Component({
  components: { VFormBuilderModal, VFormBuilderFields }
})
export default class VFormBuilder extends Vue {
  fields: Field[] = FIELDS_FIXTURE

  dialog = {
    active: false,
    field: {}
  }

  openDialog<Field> (field?: Field): void {
    if (field) this.dialog.field = field

    this.dialog.active = true
  }

  closeDialog (): void {
    this.dialog.active = false
    this.dialog.field = {}
  }

  editItem (code: string): void {
    const field = this.fields.find(i => i.code === code)

    this.openDialog(field)
  }

  saveField (field: Field): void {
    const foundIndex = this.fields.findIndex(i => i.code === field.code)

    this.fields[foundIndex] = field

    this.closeDialog()
  }
}
</script>
