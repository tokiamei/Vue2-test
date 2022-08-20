<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
    name: "About",
    // mounted () {
    //   console.log("About 挂载完毕")
    //   window.aboutRoute = this.$route
    //   window.aboutRouter = this.$router
    // },
    // beforeDestroy () {
    //   console.log("About 被销毁")
    // }

    // 通过路由规则，离开该组件时被调用
    beforeRouteEnter (to, from, next) {
      if (localStorage.getItem( "school" ) === "霍格沃茨") next()
      else alert("你不是霍格沃茨的学生，无法进入")
    },
    beforeRouteLeave (to, from, next) {
      next()
    }
}
</script>