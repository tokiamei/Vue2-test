<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <h1>放大10倍的数字{{bigSum}}</h1>
    <h2>我在{{school}}，学习{{subject}}</h2>
    <select v-model="step">
      <option :value=1>1</option>
      <option :value=2>2</option>
      <option :value=3>3</option>
    </select>
    <button @click="JIA(step)">+</button>
    <button @click="JIAN(step)">-</button>
    <button @click="jiaOdd(step)">当前求和为奇数再加</button>
    <button @click="jiaWait(step)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from "vuex"
export default {
  name: "Count",
  data() {
    return {
      step: 1
    }
  },
  computed: {
    // 借助 mapState 生成计算属性，从 state 中读取数据（对象写法）
    // ...mapState({he: "sum", xuexiao: "school", xueke: "subject"}),

    // 借助 mapState 生成计算属性，从 state 中读取数据（数组写法）
    ...mapState(["sum", "school", "subject"]),

    /* ********************************** */
    // 借助 mapGetters 生成计算属性，从 Getters 中读取数据（对象写法）
    // ...mapGetters({bisSum: "bigSum"}),
    // 借助 mapGetters 生成计算属性，从 Getters 中读取数据（数组写法）
    ...mapGetters(["bigSum"])
  },
  methods: {
    // 程序员亲自写方法
    // increment () {
    //   // 调用 dispatch 方法
    //   this.$store.commit("JIA", this.step)
    // },
    // decrement () {
    //   this.$store.commit("JIAN", this.step)
    // },
    // 借助 mapMutations 生成相应的方法，方法中会调用 commit 去联系 mapMutations（对象写法）
    // ...mapMutations({increment: "JIA", decrement: "JIAN"}),
    // 借助 mapMutations 生成相应的方法，方法中会调用 commit 去联系 mapMutations（数组写法）
    ...mapMutations(["JIA", "JIAN"]),


    /* **************************************** */
    // incrementWhenOdd () {
    //    this.$store.dispatch("jiaOdd", this.step)
    // },
    // incrementWait () {
    //   this.$store.dispatch("jiaWait", this.step)
    // }

    // 利用 mapActions 生成相应的方法，方法中会调用 dispatch 去联系 mapActions（对象写法）
    // ...mapActions({ incrementWhenOdd: "jiaOdd", incrementWait: "jiaWait"})
    // 利用 mapActions 生成相应的方法，方法中会调用 dispatch 去联系 mapActions（对象写法）
    ...mapActions(["jiaOdd", "jiaWait"])
  },
  mounted () {
    const x = mapState({he: "sum", xuexiao: "school", xueke: "subject"})
    // console.log(x) 
  }
};
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>
