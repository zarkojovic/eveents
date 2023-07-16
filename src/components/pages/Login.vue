<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="usernameInput"
        label="username"
        type="text"
        required
      ></v-text-field>
      <v-text-field
        v-model="passwordInput"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <ul v-if="errors.length">
        <li v-for="err in errors" :key="err">
          {{ err }}
        </li>
      </ul>

      <v-btn type="submit" dark color="primary">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>
// import { VDialog, VCard, VCardText, VCardActions, VBtn } from "vuetify/lib";
import { mapGetters } from "vuex";
export default {
  name: "LoginComponent",

  data() {
    return {
      dialog: true,
      usernameInput: "zarkozver",
      passwordInput: "Lozinka123.",
      errors: "",
    };
  },
  methods: {
    submitForm() {
      this.$axios
        .post("http://localhost/eveents/models/users/loginUser.php", {
          username: this.usernameInput,
          password: this.passwordInput,
        })
        .then((res) => {
          let elems = res.data;

          let token = elems[0];
          let user = elems[1];

          localStorage.setItem("token", token);
          this.$store.commit("changeUser", user);

          localStorage.setItem("user", JSON.stringify(user));
          this.$router.push("/");
          window.location.reload();
        })
        .catch((error) => {
          // Handle error response
          this.errors = error.response.data;
        });
    },
  },
  computed: {
    ...mapGetters(["role", "username"]),
  },
  mounted() {
    if (this.role != "unauthorized") {
      this.$router.push("/");
    }
  },
};
</script>
