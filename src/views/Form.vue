<template>
<div>
  <VFilter :fields="fields"/>
</div>
</template>

<script lang="ts">
import VFilter from '../components/VFilter'
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
export default class FormView extends Vue {
}
</script>
