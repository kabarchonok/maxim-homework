<template>
  <div>
    <VCard v-if="fields.length">
      <VCardTitle>
        <VBtn
          class="primary"
          @click="openDialog(null)"
        >
          Добавить поле
        </VBtn>
      </VCardTitle>

      <VCardText>
        <VFormBuilderFields
          :fields="fields"
          @edit-item="editItem"
          @remove-item="removeField"
        />
      </VCardText>
    </VCard>

    <VEmptyState
      v-else
      icon="assignment"
    >
      <p>Похоже, поля отсутствуют</p>
      <VBtn
        class="primary"
        @click="openDialog(null)"
      >
        Добавить новое
      </VBtn>
    </VEmptyState>

    <VDialog
      v-model="dialog.active"
      persistent
      max-width="800px"
    >
      <VFormBuilderModal
        :field="dialog.field"
        @close-dialog="closeDialog"
        @save-field="saveField"
      />
    </VDialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import VFormBuilderFields from './VFormBuilderFields.vue'
import VFormBuilderModal from '@/components/VFormBuilder/VFormBuilderModal/VFormBuilderModal.vue'
import { Field } from '@/utils/types'
import VEmptyState from '@/components/VEmptyState/VEmptyState.vue'

@Component({
  components: { VEmptyState, VFormBuilderModal, VFormBuilderFields }
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
    this.dialog.field = {}
  }

  editItem (code: string): void {
    const field = this.fields.find(i => i.code === code)

    this.openDialog(field)
  }
}
</script>
