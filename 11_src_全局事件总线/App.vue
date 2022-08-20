<template>
   <div class="app">
    <school/>
    <student/>
   </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name: "App",
    components: {Student, School},
    data() {
        return {
        }
    },
}
</script>
<style scoped>
    .app { background-color: gray; padding: 5px;}
</style>