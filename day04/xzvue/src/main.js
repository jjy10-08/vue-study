import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader'
import axios from 'axios'

axios.defaults.baseURL="http://xzserver.applinzi.com"
Vue.prototype.axios=axios;

Vue.component("my-header", MyHeader);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
