import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入第三方组件库 mint-ui
import MintUI from "mint-ui"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import axios from 'axios'

// require styles
import 'swiper/dist/css/swiper.css'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

Vue.use(mandMobile)

Vue.use(VueAwesomeSwiper, /* { default global options } */)
//单引入mint-ui样式文件
import('mint-ui/lib/style.css')
//注册mint-ui
//引入图标字体文件css文件
import"./font/iconfont.css"
import Vant from 'vant';
import 'vant/lib/index.css';
import qs from 'qs'
Vue.use(Vant);
Vue.use(MintUI)
axios.defaults.withCredentials=true;
//配置基础路径,方便日后修改服务器地址
axios.defaults.baseURL="http://127.0.0.1:8080/"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//注册
Vue.prototype.axios=axios; 
Vue.prototype.qs = qs;
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
