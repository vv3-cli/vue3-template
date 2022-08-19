<template>
    <div class="main">
        <p>list请求功能:</p>
        <ul class="list">
            <li v-for="item in List" :key="item.article_id">
                {{ item.article_info.title }}
            </li>
        </ul>
        <p>list路由功能:</p>
        <ul>
            <li>
                <router-link :to="{ path: '/index' }">点击进入首页</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { getList } from "@/request/api/index";
import { ref } from "vue";

const List = ref([]);

getList({}).then((res) => {
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
