<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title> Card Title </v-card-title>
            <v-card-text> This is the content of the card. </v-card-text>
            <v-card-actions class="mt-4 mb-6">
              <v-btn dark color="primary">Action 1</v-btn>
              <v-btn color="secondary">Action 2</v-btn>
            </v-card-actions>
          </v-card></v-col
        ><v-col cols="6">
          <v-card>
            <v-card-title> Card Title </v-card-title>
            <v-card-text> This is the content of the card. </v-card-text>
            <v-card-actions>
              <v-btn dark color="primary" class="mt-4 mb-6" @click="actionBtn"
                >Action 1</v-btn
              >
              <v-btn color="secondary" class="mt-4 mb-6">Action 2</v-btn>
            </v-card-actions>
          </v-card></v-col
        >
      </v-row>
    </v-container> -->
    <Footer />
  </div>
</template>

<script>
// import { VCard, VCardTitle, VCardText, VBtn } from "vuetify/lib";
import Header from "./components/fixed/Header.vue";
import Footer from "./components/fixed/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    // VCard,
    // VCardTitle,
    // VCardText,
    // VBtn,
  },

  data: () => ({
    items: [
      {
        title: "Prvi",
      },
      {
        title: "Prvi",
      },
      {
        title: "Prvi",
      },
    ],
  }),
  methods: {
    actionBtn() {
      alert("Najjace");
    },
  },
};
</script>
