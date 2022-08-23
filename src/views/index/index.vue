<template>
    <div class="main">
        <p>首页请求功能:</p>
        <ul class="list">
            <li v-for="item in List" :key="item.user_id">
                {{ item.user_name }}
            </li>
        </ul>
        <p>首页路由功能:</p>
        <ul>
            <div class="button">
                <router-link :to="{ path: '/list' }">点击进入列表</router-link>
            </div>
        </ul>
    </div>
</template>

<script setup>
import { getAuthor } from "@/request/api/index";
import { ref } from "vue";
const List = ref([]);

let a = "两只老虎";

console.log(a);

getAuthor({}).then((res) => {
    console.log(res);
    List.value = res;
});
</script>

<style lang="scss" scoped>
.main {
    text-align: center;

    .list {
        min-height: 200px;
    }

    p {
        font-size: 30px;
    }
}
</style>
