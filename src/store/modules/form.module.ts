import Vue from 'vue'
import { CommonField } from '@/utils/types'
import FIELDS_FIXTURE from '@/fixtures/fields.json'

interface Interface {
  fields: CommonField[];
}

export const state: Interface = {
  fields: FIELDS_FIXTURE
}

export const actions = {}

export const mutations = {
  createField (state: Interface, field: CommonField) {
    let [lastCode]: any = state.fields[state.fields.length - 1].code.match(/\d+/)
    if (!lastCode) return

    field.code = `field${++lastCode}`

    state.fields.push(field)
  },
  editField (state: Interface, field: CommonField) {
    const foundIndex = state.fields.findIndex(i => i.code === field.code)

    Vue.set(state.fields, foundIndex, field)
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
