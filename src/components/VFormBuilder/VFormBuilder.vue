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
        <VFormBuilderList
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
      v-if="dialog.active"
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
import VFormBuilderList from './VFormBuilderList.vue'
import VFormBuilderModal from '@/components/VFormBuilder/VFormBuilderModal/VFormBuilderModal.vue'
import { Field } from '@/utils/types'
import VEmptyState from '@/components/VEmptyState/VEmptyState.vue'

const INITIAL_FIELD = (): Field => ({
  code: '',
  caption: '',
  type: '',
  value: {}
})

Component.registerHooks(['mounted'])
@Component({
  components: {
    VEmptyState,
    VFormBuilderModal,
    VFormBuilderList
  }
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

  initialField = INITIAL_FIELD()

  dialog = {
    active: false,
    field: this.initialField
  }

  mounted () {
    if (this.$route.hash === '#new') this.openDialog(null)
  }

  openDialog (field?: Field | null): void {
    this.dialog.field = field || this.initialField

    this.dialog.active = true
  }

  closeDialog (): void {
    this.dialog.active = false
    this.dialog.field = this.initialField
  }

  editItem (code: string): void {
    const field = this.fields.find(i => i.code === code)

    this.openDialog(field)
  }
}
</script>
