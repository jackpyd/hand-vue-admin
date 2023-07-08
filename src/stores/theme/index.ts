import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theStore', {
  state: () => {
    return {
      isDark: false,
    }
  },
  getters: {
    getIsDark() {
      return this.isDark
    },
  },
  actions: {
    setIsDark(isDark: boolean) {
      this.isDark = isDark
    },
  },
})
