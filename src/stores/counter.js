import { defineStore } from 'pinia'
import i18n from '@/plugins/i18n';


export const useCounterStore = defineStore('counter', {

  state: () => ({ 
    count: 0,
    subitem: { count: 0 } 
  }),

  getters: {
    doubleCount: (state) => state.counter * 2,
    isGreater : (state) => (max) => state.count > max,
  },

  actions: {
    increment() {
      this.count++
    },
  },
  
})