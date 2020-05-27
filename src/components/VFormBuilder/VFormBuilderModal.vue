<template>
  <VCard>
    <VCardTitle>Редактировать поле</VCardTitle>

    <VCardText>
      <VForm ref="form">
        <VSelect
          label="Тип"
          :items="fieldTypes"
          v-model="mutableField.type"
          :rules="[v => !!v || 'Name is required']"
        />
        <VTextField
          label="Имя"
          v-model="mutableField.caption"
          :rules="[v => !!v || 'Обязательное поле']"
        />
      </VForm>
    </VCardText>

    <VCardActions>
      <VSpacer/>
      <VBtn color="blue darken-1" text @click="closeDialog">Закрыть</VBtn>
      <VBtn color="blue darken-1" text @click="saveField">Сохранить</VBtn>
    </VCardActions>
  </VCard>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import { Field } from '@/utils/types'
import { fieldTypes } from '@/utils/fieldHelper'

@Component
export default class VFormBuilderModal extends Vue {
  @Prop({ required: true })
  field!: Field

  @Watch('field', { deep: true })
  onFieldChanged (val: Field) {
    if (!this.isFormUpdate) this.mutableField = JSON.parse(JSON.stringify(val))
  }

  @Emit()
  closeDialog () {
    this.isFormUpdate = false
    return false
  }

  @Emit()
  saveField () {
    this.isFormUpdate = true
    return this.mutableField
  }

  mutableField: Field = this.field
  isFormUpdate = false
  fieldTypes = fieldTypes
}
</script>
