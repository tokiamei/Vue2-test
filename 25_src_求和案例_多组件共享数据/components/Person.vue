<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <h2>Count组件求和为{{sum}}</h2>    
    <ul>
        <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid"
export default {
    name: "Person",
    data () {
        return {
            name: ""
        }
    },
    methods: {
        add () {
            const person = { id: nanoid(), name: this.name }
            this.$store.commit("ADD", person)
        }
    },
    computed: {
        personList () {
            return this.$store.state.personList
        },
        sum () {
            return this.$store.state.sum
        }
    }
}
</script>

<style scoped>
    h2 {
        background-color: deeppink;
    }
</style>