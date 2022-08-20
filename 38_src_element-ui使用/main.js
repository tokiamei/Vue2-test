// 导入 Vue
import Vue from 'vue'
// 导入 App
import App from './App.vue'

// 完整引入
// 引入 element-ui
// import ElementUI from "element-ui"
// 引入全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, DatePicker, Row } from 'element-ui';   

// 关闭生产提示
Vue.config.productionTip = false

// 使用 ElementUI
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
})