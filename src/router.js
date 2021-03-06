import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/wonderfulfood/Index.vue'
Vue.use(Router)
import test from "./components/wonderfulfood/common/test.vue"
import login from "./components/wonderfulfood/common/Login.vue"
import Sign from "./components/wonderfulfood/common/Sign.vue"
import Mecenter from "./components/wonderfulfood/common/Mecenter.vue"
import Post from "./components/wonderfulfood/common/Post.vue"
import Articles from "./components/wonderfulfood/common/Articles"
export default new Router({
  routes: [
    {path:"/test",component:test},
    {path:'/',component:Index},
    {path:'/index',component:Index},
    {path:'/login',component:login},
    {path:'/sign',component:Sign},
    {path:'/mecenter',component:Mecenter},
    {path:'/post',component:Post},
    {path:'/articles',component:Articles},
  ]
})
