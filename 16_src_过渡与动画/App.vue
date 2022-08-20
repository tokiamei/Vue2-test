<template>
  <div>
    <Test02过渡/>
    <Test/>
    <Test03/>
  </div>
</template>
<!-- 本案例将 MyItem 中删除 todo 换成消息订阅写法 -->
<script>
import Test02过渡 from "./components/Test02过渡.vue"
import Test from "./components/Test.vue"
import Test03 from "./components/Test03.vue"
export default {
  name: "App",
  components: { Test02过渡, Test, Test03}
}
</script>