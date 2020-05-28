<template>
<div>
  <VCard>
    <VCardTitle>
      <VBtn class="primary" @click="openDialog(null)">Добавить поле</VBtn>
    </VCardTitle>

    <VCardText>
      <VFormBuilderFields :fields="fields" @edit-item="editItem" @remove-item="removeField"/>
    </VCardText>
  </VCard>

  <VDialog v-model="dialog.active" persistent max-width="600px">
    <VFormBuilderModal :field="dialog.field" @close-dialog="closeDialog" @save-field="saveField"/>
  </VDialog>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import VFormBuilderFields from '@/components/VFormBuilder/VFormBuilderFields.vue'
import VFormBuilderModal from '@/components/VFormBuilder/VFormBuilderModal.vue'
import { Field } from '@/utils/types'

@Component({
  components: { VFormBuilderModal, VFormBuilderFields }
})
export default class VFormBuilder extends Vue {
  @Prop({ required: true })
  public fields!: Field[]

  @Emit()
  saveField (code: string) {
    return code
  }

  @Emit()
  removeField (field: Field) {
    return field
  }

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
  }

  editItem (code: string): void {
    const field = this.fields.find(i => i.code === code)

    this.openDialog(field)
  }
}
</script>
