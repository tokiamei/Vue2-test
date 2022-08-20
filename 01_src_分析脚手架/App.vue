<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
    import School from "./components/SchoolName.vue"
    import Student from "./components/StudentName.vue"
    
    export default {
        name: "app",
        components: {
            School,
            Student
        }
    }
</script>