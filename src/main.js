import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";
import store from "./store";
import util from "./server/util";
import Dropdown from "./components/Dropdown/Dropdown.vue";
import Tab from "./components/Tab/Tab.vue";
import Modal from "./components/Modal/Modal.vue";

const app = createApp(App);

app.config.globalProperties.$util = util;

app
  .use(router)
  .use(store)
  .component("Dropdown", Dropdown)
  .component("Tab", Tab)
  .component("Modal", Modal)
  .mount("#app");
