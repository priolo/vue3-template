import { defineStore } from 'pinia'


export const useLayoutStore = defineStore('layout', {

  state: () => ({ 

    title: "",
    
    drawer: true,

    menu: [
      {
        text: 'Home',
        path: "/",
        icon: "mdi-clock",
      },
      {
        text: 'Users',
        path: "/users",
        icon: "mdi-account",
      },
      {
        text: 'Docs',
        path: "/docs",
        icon: "mdi-account",
      },
    ],

    busy: false,

  }),

  getters: {
  },

  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    dialogOpen(options) {
      console.log(options)
    },
  },
})

export const DIALOG_TYPES = {
	INFO: "info",
	WARNING: "warning",
	ERROR: "error",
	SUCCESS: "success",
}