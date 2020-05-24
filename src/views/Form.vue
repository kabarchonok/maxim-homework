<template>
<div>
  <VFilter :fields="fields"/>
</div>
</template>

<script>
import VFilter from '../components/VFilter'

import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    VFilter
  },
  data () {
    return {
      fields: [
        {
          code: 'field1',
          caption: 'поле 1',
          type: 'number'
        },
        {
          code: 'field2',
          caption: 'поле 3',
          type: 'string'
        },
        {
          code: 'field4',
          caption: 'поле 4',
          type: 'bool'
        }
      ]

    }
  }
})
export default class FormView extends Vue {
}
</script>
