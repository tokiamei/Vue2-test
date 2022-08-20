<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        <MyFooter :todos="todos" @checkAll="checkAll" @clearAll="clearAll"/>
      </div>
    </div>
  </div>
</template>

<script>
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
    deleteTodo(id) {
      confirm("您确定要删除吗？");
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选或全不选
    checkAll (check) {
      this.todos.reduce((pre, cur) => cur.done = check, 0)
    },
    clearAll() {
      this.todos = this.todos.filter(item => !item.done);
    }
  },
  components: { MyHeader, MyFooter, MyList },
  watch: {
    todos: {
      deep: true,
      handler (value) { localStorage.setItem("todos", JSON.stringify(value)); }
    }
  }
};
</script>

<style scoped>
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
