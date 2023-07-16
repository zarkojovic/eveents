<template>
  <div>
    <v-container>
      <h1 class="text-center">Welcome, {{ username }}</h1>
      <br />
      <h2>Upcoming events</h2>
      <Events />
    </v-container>
  </div>
</template>
<script>
import Events from "../sections/Events.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Events,
  },
  computed: {
    ...mapGetters(["role", "username"]),
  },
  name: "HomeComponent",
  mounted() {
    if (this.role == "unauthorized") {
      this.$router.push("/login");
    }
  },
};
</script>
