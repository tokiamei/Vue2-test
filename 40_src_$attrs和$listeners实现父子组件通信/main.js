// 导入 Vue
import Vue from 'vue'
// 导入 App
import App from './App.vue'

// 引入 element-UI
import { Button } from 'element-ui'
Vue.component(Button.name, Button)

// 关闭生产提示
Vue.config.productionTip = false

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
})