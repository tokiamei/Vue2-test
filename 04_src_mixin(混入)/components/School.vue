<template>
  <div>
    <h2>学校名称：{{ name }}</h2>  
    <h2>学校地址：{{ address }}</h2>  
    <button @click="showName">点击显示姓名</button>
  </div>
</template>

<script>
import {hunhe} from "../mixin"
export default {
    name: "School",
    data() {
        return {
          name: "霍格沃茨魔法学院",
          address: "England"
        }
    },
    mixins: [hunhe]
}
</script>