<template>
  <div>
    <h1>我是 School 组件</h1>
    <input type="text" :value="area" @input="area=$event.target.value">{{area}}
    <Student :value="area" @input="area = $event"/>
    <Student v-model="area"/>
  </div>
</template>

<script>
import Student from '@/components/Student'
export default {
  name: 'School',
  data() {
    return {
      area: 'England'
    }
  },
  components: { Student }
}
</script>

<style>

</style>