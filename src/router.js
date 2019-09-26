import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/wonderfulfood/Index.vue'
Vue.use(Router)
import test from "./components/wonderfulfood/common/test.vue"
import login from "./components/wonderfulfood/common/Login.vue"
export default new Router({
  routes: [
    {path:"/test",component:test},
    {path:'/',component:Index},
    {path:'/index',component:Index},
    {path:'/login',component:login},
  ]
})
