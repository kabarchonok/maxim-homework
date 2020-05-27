<template>
  <VFormBuilder class="FormBuilder"/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VFormBuilder from '@/components/VFormBuilder'

@Component({
  components: { VFormBuilder }
})
export default class EditView extends Vue {}
</script>

<style scoped>
.FormBuilder {
  max-width: 800px;
  margin: auto;
}
</style>
