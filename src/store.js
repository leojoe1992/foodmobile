//引入vuex
import Vue from 'vue';
import Vuex from 'vuex'
//use vuex
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    active:'foodset'
  },
  mutations: {
    changeActive (state,val) {
      
      state.active = val
    }
  }
})

// Vue.prototype.store = store;

export default store