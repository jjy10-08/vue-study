import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index' 
//除首页组件之外，不要用import方式过早引入
// import Details from "../views/Details"

Vue.use(VueRouter)

  const routes = [
  { path: '/', component: Index },
  // { path:"/details/:lid", component: Details, props:true}
  {
    path: '/details/:lid',
    //只有当用户访问到/details/:lid路径时，才临时执行箭头函数，才临时执行import(...)
    ///**/注释不能删除，它为将来分块打包时，当前组件所在的js文件起文件名。
    //比如: webpackChunkName: "details"
    //结果: Details.vue会被编译为一个details.js文件
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue'),
    props:true
  }
]

const router = new VueRouter({
  routes
})

export default router
