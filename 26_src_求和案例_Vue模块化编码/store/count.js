// 求和相关配置
export default {
    namespaced: true,
    actions: {
      jiaOdd(contex, value) {
        if (contex.state.sum % 2) contex.commit("JIA", value);
      },
      jiaWait(contex, value) {
        setTimeout(() => {
          contex.commit("JIA", value);
        }, 500);
      },
    },
    mutations: {
      JIA(state, value) {
        state.sum += value;
      },
      JIAN(state, value) {
        state.sum -= value;
      },
    },
    state: {
      sum: 0, // 和
      school: "霍格沃茨",
      subject: "飞行",
    },
    getters: {
      bigSum(state) {
        return state.sum * 10;
      },
    },
  };