import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'selectKey',
  state: () => ({
    username: 'David',
    navKey: ['nav1'],
    sideKey: ['1'],
    token: ''
  }),
  getters: {
    getNavKey: (state) => state.navKey,
    getSideKey: (state) => state.sideKey,
  },
  actions: {
    changeNavKey(key: string[]) {
      this.navKey = key
    },
    changeSideKey(key: string[]) {
      this.sideKey = key
    },
    changeToken(token: string) {
      this.token = token
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'DsAdmin', // 默认key是上面store的id，可自定义key
        storage: sessionStorage, // 默认是sessionStorage会话存储，可以设置为localStorage本地长存储
      }
    ]
  }
})
