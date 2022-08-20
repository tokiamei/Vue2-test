<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
    <!-- <h1 class="sum">放大10倍的数字{{bigSum}}</h1> -->
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
    <h1>person组件的总人数是:{{personList.length}}</h1>
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
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
    ...mapGetters(["bigSum"])
  },
  methods: {
    // 借助 mapMutations 生成相应的方法，方法中会调用 commit 去联系 mapMutations（数组写法）
    ...mapMutations("countAbout", ["JIA", "JIAN"]),
    // 利用 mapActions 生成相应的方法，方法中会调用 dispatch 去联系 mapActions（对象写法）
    ...mapActions("countAbout", ["jiaOdd", "jiaWait"])
  },
  mounted () {
    console.log(this)
  }
};
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
  .sum {
    background-color: deeppink;
  }
</style>
