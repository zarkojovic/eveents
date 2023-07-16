<template>
  <v-footer app>
    <v-container fluid>
      <v-row align="center">
        <v-col>
          <!-- Footer content goes here -->
          <v-btn icon @click="scrollToTop">
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
import { VFooter, VContainer, VRow, VCol, VBtn, VIcon } from "vuetify/lib";

export default {
  name: "FooterComponent",
  components: {
    VFooter,
    VContainer,
    VRow,
    VCol,
    VBtn,
    VIcon,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
