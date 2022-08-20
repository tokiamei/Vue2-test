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
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementWhenOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex"
export default {
  name: "Count",
  data() {
    return {
      step: 1
    }
  },
  computed: {
    /* 程序员自己去写计算属性：he、xuexiao、xueke */
    // he () {
    //   return this.$store.state.sum
    // },
    
    // xuexiao () {
    //   return this.$store.state.school
    // },
    // xueke () {
    //   return this.$store.state.subject
    // },
    

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
    increment () {
      // 调用 dispatch 方法
      this.$store.commit("JIA", this.step)
    },
    decrement () {
      this.$store.commit("JIAN", this.step)
    },
    incrementWhenOdd () {
       this.$store.dispatch("jiaOdd", this.step)
    },
    incrementWait () {
      this.$store.dispatch("jiaWait", this.step)
    }
  },
};
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>
