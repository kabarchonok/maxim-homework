<template>
  <div>
    <VSheet
      dark
      color="primary lighten-2"
    >
      <div class="overline pl-4 pt-3">
        Добавить правило
      </div>
      <VForm @submit.prevent="addRule">
        <VContainer grid-list-xl>
          <VLayout align-baseline>
            <VFlex md4>
              <VSelect
                v-model="selectedRule.type"
                :disabled="!canAddRule"
                :items="ruleSelect"
                solo-inverted
                label="Выберите правило"
                hide-details
              />
            </VFlex>
            <VFlex md5>
              <VSelect
                v-if="type === 'bool'"
                v-model="selectedRule.value"
                :disabled="!canAddRule"
                solo-inverted
                hide-details
                :items="boolSelect"
              />
              <VTextField
                v-else
                v-model="selectedRule.value"
                :disabled="!canAddRule"
                :type="type"
                solo-inverted
                autocomplete="off"
                hide-details
              />
            </VFlex>
            <VFlex md3>
              <VBtn
                :disabled="isBtnDisabled"
                light
                block
                type="submit"
              >
                Добавить
              </VBtn>
            </VFlex>
          </VLayout>
        </VContainer>
      </VForm>
    </VSheet>

    <VDataTable
      class="VFormBuilderModalRules__table"
      hide-default-footer
      :headers="headers"
      :items="ruleList"
      no-data-text="Правила отсутствуют"
    >
      <template v-slot:item.actions="{ item }">
        <VBtn
          icon
          @click="removeRule(item.id)"
        >
          <VIcon title="Удалить">
            delete
          </VIcon>
        </VBtn>
      </template>
    </VDataTable>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Watch } from 'vue-property-decorator'
import { BoolRules, NumberRules, StringRules } from './rules'
import { fieldRuleLabels } from '@/utils/fieldHelper'
import { FieldRules } from '@/utils/types'

@Component
export default class VFormBuilderModalRules extends Vue {
  @Prop()
  public type!: 'number' | 'string' | 'bool'

  @PropSync('rules', { type: Object })
  syncedRules!: FieldRules

  @Watch('type')
  onTypeChanged () {
    this.syncedRules = {}
  }

  get ruleSelect () {
    switch (this.type) {
      case 'string':
        return StringRules
      case 'number':
        return NumberRules
      case 'bool':
        return BoolRules
    }
  }

  get ruleList () {
    if (!this.syncedRules) return []

    const list = []
    for (const [key, value] of Object.entries(this.syncedRules)) {
      list.push({ id: key, name: fieldRuleLabels[key], value: value })
    }
    return list
  }

  get isBtnDisabled () {
    return !this.selectedRule.type || !this.selectedRule.value
  }

  get canAddRule () {
    if (this.type === 'number' && Object.keys(this.syncedRules).length <= 1) {
      return true
    } else if (this.type && !Object.keys(this.syncedRules).length) {
      return true
    }

    return false
  }

  boolSelect = [
    { value: true, text: 'Да' },
    { value: false, text: 'Нет' }
  ]

  headers = [
    { value: 'name', text: 'Имя', sortable: false },
    { value: 'value', text: 'Значение', sortable: false },
    { value: 'actions', sortable: false, width: '30px' }
  ]

  selectedRule = {
    type: '',
    value: ''
  }

  addRule () {
    Vue.set(this.syncedRules, this.selectedRule.type, this.selectedRule.value)
    this.selectedRule = { type: '', value: '' }
  }

  removeRule (type: string) {
    Vue.delete(this.syncedRules, type)
  }
}
</script>

<style scoped>
.VFormBuilderModalRules__table {
  border: 1px solid #E0E0E0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 0;
}
</style>
