import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      show: false,
      navShow: false
    }
  }
})