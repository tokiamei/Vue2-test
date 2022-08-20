<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 利用 props 声明接收 todo
  props: ["todo"],
  methods: {
    // 勾选或取消勾选
    handleCheck(id) {
      // 触发事件，通知 App 组件将对应的 todo 对象的 done 值取反
      this.$bus.$emit("checkTodo", id);
    },
    // 删除 todo
    handleDelete (id) {
      // 触发事件，通知 App 将对应的 todo 项删除
      this.$bus.$emit("deleteTodo", id);
    } 
  },
  // mounted() {console.log(this.todo)}
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: palevioletred;
}
.btn {
  display: block;
}
</style>
