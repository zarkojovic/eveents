<template>
  <div>
    <v-app-bar color="orange">
      <v-toolbar-title>Eveents</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in navItems"
          :key="item.navigation_name"
          :to="item.navigation_link"
          >{{ item.navigation_name }}</v-btn
        >
        <v-btn v-if="role == 'unauthorized'" to="/login">Login</v-btn>
        <v-btn v-if="role != 'unauthorized'" @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  VAppBar,
  VToolbarTitle,
  VSpacer,
  VToolbarItems,
  VBtn,
} from "vuetify/lib";
import axios from "axios";
export default {
  name: "HeaderComponent",
  components: {
    VAppBar,
    VToolbarTitle,
    VSpacer,
    VToolbarItems,
    VBtn,
  },
  data() {
    return {
      navItems: [],
      users: null,
    };
  },
  computed: {
    ...mapGetters(["role", "username"]),
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$store.commit("changeUser", null);
      window.location.reload();
    },
    printItems() {
      let that = this;
      if (this.username != "guest") {
        let key = localStorage.getItem("token");
        if (key == null) {
          console.log("GRESKA!");
        }
        console.log("hai yooo");
        axios
          .get(
            "http://localhost/eveents/models/navigations/navigationsController.php",
            {
              headers: {
                Authorization: "Bearer " + key,
              },
            }
          )
          .then((data) => {
            console.log(data.data);
            let items = data.data;
            Array.isArray(items) ? (that.navItems = data.data) : "";
          });
      }
    },
  },
  mounted() {
    this.printItems();
  },
};
</script>
