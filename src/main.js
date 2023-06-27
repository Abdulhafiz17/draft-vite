import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";
import store from "./store";
import Dropdown from "./components/Dropdown/Dropdown.vue";
import Tab from "./components/Tab/Tab.vue";
import Modal from "./components/Modal/Modal.vue";

createApp(App)
  .use(router)
  .use(store)
  .component("dropdown", Dropdown)
  .component("tab", Tab)
  .component("modal", Modal)
  .mount("#app");
