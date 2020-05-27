<template>
  <v-navigation-drawer permanent :mini-variant="drawer" app>

    <v-list>
      <v-list-item
        v-for="item in items"
        v-bind:key="item.name"
        :to="item.href"
        :title="item.name"
      >
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  data () {
    return {
      items: [
        { name: 'Посмотреть форму', icon: 'list_alt', href: '/form' },
        { name: 'Редактировать структуру', icon: 'assignment', href: '/edit' }
      ]
    }
  },
  methods: {
    onInput () {
      console.log('input')
    }
  }
})
export default class TheNavigator extends Vue {
  @Prop({ required: true })
  public drawer!: boolean
}
</script>
