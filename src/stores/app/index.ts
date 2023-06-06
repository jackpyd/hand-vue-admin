import { defineStore } from 'pinia'

const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      isExpand: true,
    }
  },

  actions: {
    changeExpaned(): void {
      this.isExpand = !this.isExpand
    },
  },
})

export default useAppStore
