import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { store } from "./store/store.js";
import Buefy from "buefy";
import Home from "./components/Home.vue";
import "@mdi/font/css/materialdesignicons.css";
import About from "./components/About.vue";
import 'buefy/dist/buefy.css';





Vue.config.productionTip = false;



Vue.use(Buefy);
Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [{ path: "/", name: "Home", component: Home },
            {path: "/about", name: "About", component: About}
    
],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
