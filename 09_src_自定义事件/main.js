// 导入 Vue
import Vue from 'vue'
// 导入 App
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建 vm
new Vue({
    el: "#app",
    render: h => h(App),
    mounted() {
        setTimeout(() => {
            this.$destroy(); // 三秒之后销毁 vm，vm 销毁之后，vc 也全部不奏效，但是原生事件不受影响
        }, 3000)
    }
})