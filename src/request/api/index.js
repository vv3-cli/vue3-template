import http from "../methods.js";
console.log(http);
export const getList = (p) => {
    return http.post("m1/1471951-0-default/recommend_api/v1/article/recommend_cate_feed", p);
};
export const getAuthor = (p) => {
    return http.get("m1/1471951-0-default/recommend_api/v1/article/recommend", p);
};
// https://mock.apifox.cn/
