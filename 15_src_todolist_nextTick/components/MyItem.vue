<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input 
      type="text" 
      :value="todo.title" 
      v-show="todo.isEdit" 
      @blur="handleBlur(todo, $event)"
      ref="updateTitle"
      >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js';

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
      // this.$bus.$emit("deleteTodo", id);
      PubSub.publish("deleteTodo", id);
    },
    // 编辑
    handleEdit (todo) {
      if (todo.hasOwnProperty("isEdit")) todo.isEdit = true;
      this.$set(todo, "isEdit", true);
      // this.$refs.updateTitle.focus(); // 这么写是无效的，这段代码在模板解析之前就执行了，但是可以用一个定时器就可以解决
      // 用内置的一个 API，在下一次 DOM 更新结束后执行其指定的回调
      this.$nextTick(() => this.$refs.updateTitle.focus())
    },
    // 失去焦点回调，执行真正修改逻辑
    handleBlur (todo, e) {
      todo.isEdit = !todo.isEdit;
      if (!e.target.value) return alert("输入不能为空，请重新输入！")
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
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
