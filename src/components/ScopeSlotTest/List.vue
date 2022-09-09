<template>
  <ul>
    <li v-for="(todo,index) in todos" :key="todo.id">
      <!-- 作用于插槽的使用 -->
      <!-- 子组件的数据来源于父组件，但是子组件的外观由父组件决定 -->
      <!-- 下面写法起始不是 props,就是作用域插槽的语法，将数据回传给父组件 -->
      <slot :todo="todo" :$index="index"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    todos: Array
  }
}
</script>