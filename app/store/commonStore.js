import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => ({
        count: 0
    }),
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    },
    actions: {
        increment() {
            this.count++
        }
    }
})