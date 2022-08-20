// 导入 Vue
import Vue from 'vue'
// 导入 App
import App from './App.vue'
// 引入 Vue-router
import VueRouter from "vue-router"
// 引入路由器
import router from "./router"

// 使用 Vue-router
Vue.use(VueRouter)

// 关闭生产提示
Vue.config.productionTip = false

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
    router: router
})