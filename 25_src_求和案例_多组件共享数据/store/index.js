// 改文件用于创建 Vuex 中最为核心的 store

// 导入 Vue
import Vue from "vue"
// 引入 Vuex
import Vuex from "vuex"

// 在这块使用 Vuex
Vue.use(Vuex)

// 准备 actions，用于响应组件中的动作
const actions = {
    /* jia (contex, value) {
        console.log("actions中的jia被调用了", contex)
        contex.commit("JIA", value)
    },
    jian (contex, value) {
        contex.commit("JIAN", value)
    }, */
    jiaOdd (contex, value) {
        if (contex.state.sum % 2) contex.commit("JIA", value)
    },
    jiaWait (contex, value) {
        setTimeout(() => {
            contex.commit("JIA", value)
        }, 500);
    },
}
// 准备 mutations，用于操作数据（state）
const mutations = {
    JIA (state, value) {
        // console.log("mutations中的JIA被调用了", state, value)
        state.sum += value
    },
    JIAN (state, value) {
        state.sum -= value
    },
    ADD (state, value) {
        state.personList.unshift(value)
    }
}
// 准备 state，用于存储数据
const state = {
    sum: 0, // 和
    school: "霍格沃茨",
    subject: "飞行",
    personList: [
        { id: "001", name: "科比"}
    ]
}

// 准备 getters，用于对 state 中数据进行加工
const getters = {
    bigSum (state) {
        return state.sum*10
    }
}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})