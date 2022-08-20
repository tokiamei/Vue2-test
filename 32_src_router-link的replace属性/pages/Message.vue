<template>
  <div>
    <ul>
    <li v-for="message in messageList" :key="message.id">
        <!-- params 传递参数 -->
        <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp; -->
        <router-link :to="{
            name: 'xiangqing',
            query: {
                id: message.id,
                title: message.title
            }
        }">
        {{message.title}}
        </router-link>&nbsp;&nbsp;
    </li>
    <hr>
    <router-view></router-view>
    </ul>
</div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            messageList: [
                {id: "001", title: "消息001"},
                {id: "002", title: "消息002"},
                {id: "003", title: "消息003"},
            ]
        }
    },
}
</script>