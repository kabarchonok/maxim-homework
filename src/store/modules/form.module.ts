import Vue from 'vue'
import { CommonField } from '@/utils/types'
import FIELDS_FIXTURE from '@/fixtures/fields.json'

interface Interface {
  counter: number;
  fields: CommonField[];
}

export const state: Interface = {
  counter: FIELDS_FIXTURE.length,
  fields: FIELDS_FIXTURE
}

export const actions = {}

export const mutations = {
  createField (state: Interface, field: CommonField) {
    field.code = `field${++state.counter}`

    state.fields.push(field)
  },
  editField (state: Interface, field: CommonField) {
    const foundIndex = state.fields.findIndex(i => i.code === field.code)

    Vue.set(state.fields, foundIndex, field)
  },
  removeField (state: Interface, code: string) {
    const foundIndex = state.fields.findIndex(i => i.code === code)

    Vue.delete(state.fields, foundIndex)
  }
}

export const getters = {
  fields (state: Interface) {
    return state.fields
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
