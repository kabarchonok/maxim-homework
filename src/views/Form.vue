<template>
  <VCard class="Form">
    <VCardTitle>
      <h1 class="title">
        Форма
      </h1>
    </VCardTitle>

    <VCardText>
      <VFilter :fields="fields" />
    </VCardText>
  </VCard>
</template>

<script lang="ts">
import VFilter from '@/components/VFilter'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    VFilter
  }
})
export default class FormView extends Vue {
  get fields () {
    return this.$store.getters['form/fields']
  }
}
</script>

<style scoped>
.Form {
  max-width: 800px;
  margin: auto;
}
</style>
