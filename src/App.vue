<template>
  <div>
    <button @click="updateData">点击更新数据：{{name}}</button>
    <hr>
    <router-link to="/about">关于</router-link>
    <hr>
    <router-link to="/home">主页</router-link>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from "@/pages/Home"
import About from "@/pages/About"
export default {
  name: "App",
  components: { Home, About },
  data () {
    return {
      name: "混沌大天使"  
    }
  },
  methods: {
    updateData() {
      this.name = "蒂姆"
      console.log(this.name)
    }
  },
/*   beforeCreate() {
    console.log("beforeCreate", this.$el, this.$data);
  },
  created() {
    console.log("created", this.$el, this.$data);
  },
  beforeMount() {
    console.log("beforeMount", this.$el, this.$data);
  },
  mounted() {
    console.log("mounted", this.$el, this.$data);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$el, this.$data);
  },
  updated() {
    console.log("updated", this.$el, this.$data);
  },
  beforeDestroy() {
    console.log("beforeDestroy", this.$el, this.$data);
  },
  destroyed() {
    console.log("destroyed", this.$el, this.$data);
  }, */
};
</script>
