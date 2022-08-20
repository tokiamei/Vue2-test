// 导入 Vue
import Vue from 'vue'
// 导入 App
import App from './App.vue'
// 导入插件
import plugins from "./plugins"
// 关闭生产提示
Vue.config.productionTip = false
// 创建 vm

// 使用插件
Vue.use(plugins)
new Vue({
    el: "#app",
    render: h => h(App)
})