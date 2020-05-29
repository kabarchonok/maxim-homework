<template>
  <VCard>
    <VCardTitle>{{ title }}</VCardTitle>

    <VCardText>
      <VForm
        ref="form"
        v-model="formValid"
        lazy-validation
      >
        <VContainer grid-list-xl>
          <VLayout>
            <VFlex md6>
              <VSelect
                v-model="mutableField.type"
                label="Тип"
                :items="fieldTypes"
                :rules="[v => !!v || 'Обязательное поле']"
              />
            </VFlex>
            <VFlex md6>
              <VTextField
                v-model="mutableField.caption"
                label="Имя"
                :rules="[v => !!v || 'Обязательное поле']"
                autocomplete="off"
              />
            </VFlex>
          </VLayout>
        </VContainer>
        <VFormBuilderModalRules
          v-show="mutableField.type"
          :type="mutableField.type"
          :rules.sync="mutableField.value"
        />
      </VForm>
    </VCardText>

    <VCardActions>
      <VSpacer />
      <VBtn
        color="blue darken-1"
        text
        @click="closeDialog"
      >
        Закрыть
      </VBtn>
      <VBtn
        color="blue darken-1"
        text
        :disabled="!formValid"
        @click="submit"
      >
        Сохранить
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import VFormBuilderModalRules from './VFormBuilderModalRules.vue'
import { Field } from '@/utils/types'
import { fieldTypes } from '@/utils/fieldHelper'

@Component({
  components: {
    VFormBuilderModalRules
  }
})
export default class VFormBuilderModal extends Vue {
  @Prop({ required: true })
  field!: Field

  @Watch('field', { deep: true })
  onFieldChanged (val: Field) {
    if (!this.isFormUpdate) {
      this.mutableField = JSON.parse(JSON.stringify(val))
      this.resetValidation()
    }
  }

  @Emit()
  closeDialog () {
    this.resetValidation()
    this.isFormUpdate = false
    return false
  }

  @Emit()
  saveField () {
    this.isFormUpdate = true
    return this.mutableField
  }

  get title (): string {
    return this.mutableField.code ? 'Редактировать поле' : 'Создать поле'
  }

  formValid = false
  mutableField: Field = JSON.parse(JSON.stringify(this.field))
  isFormUpdate = false
  fieldTypes = fieldTypes

  submit () {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.saveField()
      this.closeDialog()
    }
  }

  resetValidation () {
    (this.$refs.form as Vue & { resetValidation: () => boolean }).resetValidation()
  }
}
</script>
