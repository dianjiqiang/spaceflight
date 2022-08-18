import { createStore } from 'vuex'

import home from './home'

const store = createStore({
  state() {
    return {
      name: '朵',
      title: '我多么想你能摆脱这世间给予的浮夸'
    }
  },
  modules: {
    home
  }
})

export default store
