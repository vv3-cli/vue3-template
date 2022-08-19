import { createApp } from "vue";
import "./style.css";
// import './views/index/indextest.scss'
import App from "./App.vue";
import router from "./router/index";
createApp(App).use(router).mount("#app");
