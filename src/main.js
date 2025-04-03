import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import { VueReCaptcha } from "vue-recaptcha-v3";

const app = createApp(App);

// Create and use Pinia store
const pinia = createPinia();
app.use(pinia);

// Configure and use reCAPTCHA
app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: false,
  },
});

app.use(router);
app.mount("#app");
