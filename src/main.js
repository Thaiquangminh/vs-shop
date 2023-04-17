import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Scrollactive from "vue-scrollactive";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  Scrollactive,
  render: (h) => h(App),
}).$mount("#app");
