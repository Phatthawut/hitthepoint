import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";

const app = createApp(App);

// Create and use Pinia store
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
