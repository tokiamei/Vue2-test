// 导入 Vue
import Vue from 'vue'
// 导入 App
import App from './App.vue'

import VueRouter from 'vue-router'
import router from "@/router"

Vue.use(VueRouter)
// 关闭生产提示
Vue.config.productionTip = false

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
    router
})