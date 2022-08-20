<template>
  <div>
    <h1>人员列表</h1>
    <h2>列表中第一个人：{{firstPersonName}}</h2>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addPersonWang">添加老王</button>
    <button @click="addPersonServer">向服务器发送请求</button>
    <h2>Count组件求和为：{{sum}}</h2>    
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
            this.$store.commit("personAbout/ADD", person)
            this.name = ""
        },
        addPersonWang () {
            const person = { id: nanoid(), name: this.name }
            this.$store.dispatch("personAbout/addPersonWang", person)
            this.name = ""
        },
        addPersonServer () {
            this.$store.dispatch("personAbout/addPersonServer")
        }
    },
    computed: {
        personList () {
            return this.$store.state.personAbout.personList
        },
        sum () {
            return this.$store.state.countAbout.sum
        },
        firstPersonName () {
            return this.$store.getters["personAbout/firstPersonName"]
        }
    }
}
</script>

<style scoped>
    h2 {
        background-color: deeppink;
    }
</style>