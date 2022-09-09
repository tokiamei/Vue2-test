<template>
  <div>
    <!-- 巧妙利用 a 标签实现按钮高亮提示功能 -->
    <a :title="title">
      <!-- 这里必须 v-bind -->
      <el-button v-bind="$attrs" v-on="$listeners">按钮</el-button>
    </a>
  </div>
</template>

<script>
export default {
  /* 改组件是对 el-button 的二次封装 */
  props: [ 'title' ],
  mounted() {
    // $attrs 是组件身上的一个属性，会拿到没有被 props 拿走的传递过来的参数【收废品的 | 捡漏】
    console.log('$attrs: ', this.$attrs);
    // $listeners 是组件身上的一个属性，它可以读取父组件给子组件传递的自定义事件
    console.log('#listeners: ', this.$listeners);
  }
}
</script>

<style>

</style>