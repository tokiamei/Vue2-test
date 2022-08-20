<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter :todos="todos" @checkAll="checkAll" @clearAll="clearAll" />
      </div>
    </div>
  </div>
</template>
<!-- 本案例将 MyItem 中删除 todo 换成消息订阅写法 -->
<script>
import PubSub from "pubsub-js";
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一个 todo
    addTodo(obj) {
      this.todos.unshift(obj);
    },
    // 勾选或取消勾选
    checkTodo(id) {
      // console.log(id)
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除 todo
    deleteTodo(_, id) {
      if (confirm("您确定要删除吗？")) {
        this.todos = this.todos.filter((todo) => {
          return todo.id !== id;
        });
      }
    },
    // 全选或全不选
    checkAll(check) {
      this.todos.reduce((_, cur) => (cur.done = check), 0);
    },
    // 清空 todo
    clearAll() {
      this.todos = this.todos.filter((item) => !item.done);
    },
    // 更新 todo
    updateTodo (id, title) {
      this.todos.reduce((_, cur) => {
        if (cur.id = id) cur.title = title;
      }, 0)
    }
  },
  components: { MyHeader, MyFooter, MyList },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  // 写个钩子，绑定全局事件总线的自定义事件，一挂载就绑定
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.pubId = PubSub.subscribe("deleteTodo", this.deleteTodo);
    this.$bus.$on("updateTodo", this.updateTodo)
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    this.$bus.$off("updateTodo");
    PubSub.unsubscribe(this.pubId);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #49da9e;
  border: 1px solid #2f65bd;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
