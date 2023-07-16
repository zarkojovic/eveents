<template>
  <div>
    <v-container>
      <h1 class="text-center">About</h1>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "AboutComponent",
  computed: {
    ...mapGetters(["role", "username"]),
  },
  mounted() {
    if (this.role == "unauthorized") {
      this.$router.push("/login");
    }
  },
};
</script>
