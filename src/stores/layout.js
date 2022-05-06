import { defineStore } from 'pinia'


export const useLayoutStore = defineStore('layout', {

  state: () => ({

    title: "",

    drawer: false,

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

    msgbox: {
      isOpen: false,
      options: null,
    },

    menuAccountIsOpen: false,

    theme: THEME_TYPES.LIGHT,

  }),

  getters: {
    msgBoxClassColorFromType: (state) => ({ 
      [DIALOG_TYPES.INFO]: "text-info",
      [DIALOG_TYPES.SUCCESS]: "text-success",
      [DIALOG_TYPES.WARNING]: "text-warning",
      [DIALOG_TYPES.ERROR]: "text-error",
    }[state.msgbox.options?.type]),
  },

  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    dialogOpen(options) {
      this.msgbox = {
        options: { ...MsgBoxOptionsDefault, ...options },
        isOpen: true,
      }
    },
    dialogClose() {
      this.msgbox = {
        ...this.msgbox,
        isOpen: false,
      }
    },
    themeToggle() {
      this.theme = this.theme==THEME_TYPES.DARK ? THEME_TYPES.LIGHT : THEME_TYPES.DARK 
    },
  },
})

export const DIALOG_TYPES = {
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
  SUCCESS: "success",
}
const THEME_TYPES = {
  LIGHT: "light",
  DARK: "dark",
}
const MsgBoxOptionsDefault = {
  title: "Message box",
  text: "Titolo generico...",
  labelClose: "Close",
  type: DIALOG_TYPES.INFO,
}
