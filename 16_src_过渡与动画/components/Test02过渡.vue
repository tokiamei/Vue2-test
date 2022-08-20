<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear name="hello">
      <h1 v-show="!isShow" key="1">挺好的</h1>
      <h1 v-show="isShow" key="2">镜花水月</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test02过渡",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

/* 进入的起点，也就是离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-to {
  transition: 0.5s linear;
}

/* 进入的终点，也就是离开的起点*/
.hello-enter-to,
.hello-leave {
  transform: translateX(0px);
}
</style>
