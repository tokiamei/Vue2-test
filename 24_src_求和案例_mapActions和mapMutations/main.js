// 导入 Vue
import Vue from 'vue'
// 导入 App
import App from './App.vue'
// 引入插件
import vueResource from "vue-resource"
// 引入 vuex
// import Vuex from "vuex"
// 引入 store
import store from "./store"


// 关闭生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(vueResource)

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
    store,
    beforeCreate () {
        Vue.prototype.$bus = this;
    }
})