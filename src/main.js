import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './router/router-permission'
import store from './store'
import './plugins/element.js'
import './assets/css/common.scss'
import './assets/css/sidebar.scss'
import './assets/css/reset_element.scss'

Vue.config.productionTip = false

//获取信息
let token=localStorage.getItem('userToken')
if(token){
  store.commit('loginModule/setUser',token)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
