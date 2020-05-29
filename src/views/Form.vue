<template>
  <VCard
    v-if="fields.length"
    class="Form"
  >
    <VCardTitle>
      <h1 class="title">
        Форма
      </h1>
    </VCardTitle>

    <VCardText>
      <VFilter :fields="fields" />
    </VCardText>
  </VCard>

  <VEmptyState
    v-else
    icon="list_alt"
  >
    <div>Похоже, форма пустая</div>
    <div>
      Вы можете
      <RouterLink to="/edit#new">
        создать
      </RouterLink> поля и попробовать снова
    </div>
  </VEmptyState>
</template>

<script lang="ts">
import VFilter from '@/components/VFilter'
import { Vue, Component } from 'vue-property-decorator'
import VEmptyState from '@/components/VEmptyState/VEmptyState.vue'

@Component({
  components: {
    VEmptyState,
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
