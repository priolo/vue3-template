import { defineStore } from 'pinia'


export const useLayoutStore = defineStore('layout', {

  state: () => ({

    title: "",

    drawer: false,
    isMobile: false,

    menu: [
      {
        text: 'pag.home.title',
        path: "/",
        icon: "mdi-clock",
      },
      {
        text: 'pag.users.title',
        path: "/users",
        icon: "mdi-account",
      },
      {
        text: 'pag.docs.title',
        path: "/docs",
        icon: "mdi-account",
      },
    ],

    busy: false,

    msgbox: {
      isOpen: false,
      options: {...MsgBoxOptionsDefault},
    },

    menuAccountIsOpen: false,

    theme: THEME_TYPES.LIGHT,

    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    },
    
  }),

  getters: {
    msgBoxClassColorFromType: (state) => ({ 
      [DIALOG_TYPES.INFO]: "text-info",
      [DIALOG_TYPES.SUCCESS]: "text-success",
      [DIALOG_TYPES.WARNING]: "text-warning",
      [DIALOG_TYPES.ERROR]: "text-error",
    }[state.msgbox.options?.type]),

    isMobile: (state) => state.size.width < 780
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
    changeLang(lang) {
      this.lang = lang
      
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
  modal: true,
}

window.addEventListener('resize', (event)=> {
  const layout = useLayoutStore()
  layout.size = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  }
}, true);
