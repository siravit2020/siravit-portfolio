import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./assets/scss/App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import VueTypedJs from "vue-typed-js";

Vue.config.productionTip = false;

Vue.use(VueTypedJs);

new Vue({
  vuetify,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
