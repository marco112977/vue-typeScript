import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  state: {
    // token信息
    token: '',
    cookie: '',
  },
  mutations: {
    save(state, [key, data, local = false]) {
      if (!key) throw new Error('mutations save need key！')
      const keyPath: any = key.split('.')
      const len = keyPath.length
      const lastKey = keyPath.pop()
      let needSave: any = state
      for (let i = 0; i < len - 1; i++) {
        needSave = needSave[keyPath[i]]
      }
      if (!needSave.hasOwnProperty(lastKey)) {
        throw new Error(`【${key}】 Error Key: ${lastKey}`)
      }
      needSave[lastKey] = data
      if (local) {
        window.sessionStorage.setItem(key, JSON.stringify(data))
      }
    }
  },
  actions: {

  }
})
