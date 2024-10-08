import "./assets/main.css";
import 'mapbox-gl/dist/mapbox-gl.css';

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Logout from "./components/logoutbutton.vue";
import Login from "./views/LoginPage.vue";
createApp(App).use(router).mount("#app");
createApp(Logout).use(router).mount("#logout");
createApp(Login).use(router).mount("#login");
