import axios from "axios"
import {nanoid} from "nanoid"

// 人员管理相关配置
export default {
    namespaced: true,
    actions: {
      addPersonWang (contex, value) {
          if (value.name.indexOf("王") === 0) contex.commit("ADD", value)
      },
      addPersonServer (contex) {
        axios.get("https://autumnfish.cn/api/joke").then(
            response => {
                contex.commit("ADD", { id: nanoid(), name: response.data})
            },
            error => {
                alert(error.message)
            }
        )
      }
    },
    mutations: {
      ADD(state, value) {
        state.personList.unshift(value);
      },
    },
    state: {
      personList: [{ id: "001", name: "科比" }],
    },
    getters: {
      firstPersonName (state) {
          return state.personList[0].name
      }
    },
  };

  // https://autumnfish.cn/api/joke