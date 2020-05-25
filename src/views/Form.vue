<template>
<VCard class="Form">
  <VCardTitle>
    <h1 class="title">Форма</h1>
  </VCardTitle>

  <VCardText>
    <VFilter :fields="fields"/>
  </VCardText>
</VCard>
</template>

<script lang="ts">
import VFilter from '@/components/VFilter'
import FIELDS_FIXTURE from '@/fixtures/fields.json'

import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    VFilter
  },
  data () {
    return {
      fields: FIELDS_FIXTURE

    }
  }
})
export default class FormView extends Vue {}
</script>

<style scoped>
.Form {
  max-width: 800px;
  margin: auto;
}
</style>
