import { getRequest } from '../../service/index'

const home = {
  namespaced: true,
  state() {
    return {
      listItem: [],
      titleData: {},
      originData: {},
      challengerData: {},
      difficultyData: {},
      futureData: {}
    }
  },
  mutations: {
    setListItem(state, payload) {
      state.listItem = payload.list.reverse()
    },
    setTitleData(state, payload) {
      state.titleData = payload.data
    },
    setOriginData(state, payload) {
      state.originData = payload.data
    },
    setChallengerData(state, payload) {
      state.challengerData = payload.data
    },
    setDifficultyData(state, payload) {
      state.difficultyData = payload.data
    },
    setFutureData(state, payload) {
      state.futureData = payload.data
    }
  },
  actions: {
    async getListItem({ commit }) {
      const listData = await getRequest('/list')
      commit('setListItem', listData)
    },
    async getItemData({ commit }, payload) {
      const ItemData = await getRequest(`/${payload}`)
      commit(`set${payload.slice(0, 1).toUpperCase() + payload.slice(1)}Data`, ItemData)
    }
  },
  getters: {}
}

export default home
