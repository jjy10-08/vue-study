import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from "./components/MyHeader.vue"
//将MyHeader组件做成全局组件
Vue.component("my-header",MyHeader)
//结果：在当前项目任何位置都可以使用<my-header></my-header>引用页头

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
