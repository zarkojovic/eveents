import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import Vuetify from "vuetify";
import Vuex from "vuex";
import "./assets/css/style.css";
import VueRouter from "vue-router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Single from "./components/pages/Single";
import store from "./store/index";
var routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/single/:id",
    component: Single,
  },
];

var router = new VueRouter({ mode: "history", routes });

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);

const vuetify = new Vuetify();

Vue.prototype.$baseUrl = "http://localhost/eveents";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  created: function () {
    var user = localStorage.getItem("user");

    if (!user) {
      this.$store.commit("changeUser", null);
      return;
    }

    this.$store.commit("changeUser", JSON.parse(user));
  },
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
