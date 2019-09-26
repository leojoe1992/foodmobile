import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入第三方组件库 mint-ui
import MintUI from "mint-ui"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

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

Vue.use(Vant);
Vue.use(MintUI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
