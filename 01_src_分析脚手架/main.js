/* 
    改文件是整个项目的入口文件
*/
// 引入 vue
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'
// 关闭 Vue 生产提示
Vue.config.productionTip = false
// 创建 Vue 实例对象
new Vue({
  el: "#app",
  // 完成了功能：将 app 放入容器
  render: h => h(App),
})

// .$mount('#app')