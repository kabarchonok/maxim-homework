<template>
  <v-data-table
    :headers="headers"
    :items="fields"
    :expanded.sync="expanded"
    single-expand
    show-expand
    hide-default-footer
    item-key="code"
  >
    <template v-slot:item.data-table-expand="{ item, expand, isExpanded }">
      <VBtn
        v-if="hasRules(item)"
        icon
        @click="expand(isExpanded ? null : item)"
      >
        <VIcon>{{ isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</VIcon>
      </VBtn>
    </template>

    <template v-slot:item.type="{ item: { type } }">
      {{ fieldTypesObj[type] }}
    </template>

    <template v-slot:item.actions="{ item: { code } }">
      <VBtn
        icon
        title="Редактировать"
        @click="editItem(code)"
      >
        <VIcon>edit</VIcon>
      </VBtn>

      <VBtn
        icon
        title="Удалить"
        @click="removeItem(code)"
      >
        <VIcon>delete</VIcon>
      </VBtn>
    </template>

    <template v-slot:expanded-item="{ item: { value } }">
      <td :colspan="headers.length">
        <VLayout wrap>
          <VFlex
            v-for="(i, index) in value"
            :key="index"
          >
            <b>{{ fieldRuleLabels[index] }}</b>: {{ i }}
          </VFlex>
        </VLayout>
      </td>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { Field } from '@/utils/types'
import { fieldTypesObj, fieldRuleLabels } from '@/utils/fieldHelper'

@Component
export default class VFormBuilderList extends Vue {
  @Prop({ required: true })
  fields!: Field[]

  @Emit()
  editItem (code: string) {
    return code
  }

  @Emit()
  removeItem (code: string) {
    return code
  }

  headers = [
    { text: '', value: 'data-table-expand' },
    { text: 'Имя', value: 'caption', sortable: false },
    { text: 'Тип', value: 'type', sortable: false },
    { text: '', value: 'actions', width: '110px', sortable: false }
  ]

  expanded = []

  fieldTypesObj = fieldTypesObj
  fieldRuleLabels = fieldRuleLabels

  hasRules (item: Field) {
    return item.value && Object.keys(item.value).length
  }
}
</script>
