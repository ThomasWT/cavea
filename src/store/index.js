import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    currentFilter: 'all'
  },
  mutations: {
    SET_DATA(state, val) {
      state.data = val
    },
    CHANGE_FILTER(state, val) {
      state.currentFilter = val;
    }
  },
  actions: {
    getData({ commit, state }) {
      axios.get('/dummy.json').then(res => {
        commit('SET_DATA', res.data);
      }).catch(err => {
        console.log(err)
      })
    },
  },
  getters: {
    getPlatforms: (state) => (list) => {
      let tempList = [];
      list.forEach(listItem => {
        tempList.push(listItem.platform)
      })
      return tempList
    }
  }
})
