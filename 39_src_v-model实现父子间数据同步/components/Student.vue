<template>
  <div>
    <h1>我是 Student 组件</h1>
    <!-- 这样同样可以实现数据双向绑定 -->
    <input type="text" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return { 
      name: '哈利波特'
    }
  },
  props: [ 'value' ]  
}
</script>

<style>

</style>