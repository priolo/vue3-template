import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {

  state: () => ({ 
    drawer: true,
    menu: [
      {
        text: 'Home',
        path: "/",
        icon: "mdi-clock",
      },
      {
        text: 'About',
        path: "/about",
        icon: "mdi-account",
      },
    ]
  }),

  getters: {
  },

  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
})