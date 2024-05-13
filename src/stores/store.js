import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    name: null,
  }),
  actions: {
    saveName(name) {
      this.name = name;
    },
  },
})
