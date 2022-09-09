<template>
  <div>
    <!-- 当用户在使用我们封装的按钮时，我们向 HintButton 传递数据【也就相当于进行了二次封装】 -->
    <HintButton type="sucess" icon="el-icon-delete" size="mini" title="提示按钮" @click="handler"/>
  </div>
</template>

<script>
export default {
  name: 'AttrsListenersTest',
  components: {
    HintButton: () => {
      console.log('嘿嘿嘿');
      return import('./HintButton')
    }
  },
  methods: {
    handler() {
      alert('00000')
    }
  }
}
</script>

<style>

</style>