import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './modules/loginModule';
import permission from './modules/permission';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginModule,
    permission
  }
})
