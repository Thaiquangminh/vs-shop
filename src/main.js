import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { useActive } from "vue-use-active-scroll";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  useActive,
  render: (h) => h(App),
}).$mount("#app");
