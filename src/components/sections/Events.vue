<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" v-for="index in events" :key="index.event_id">
        <v-img
          :src="imagePath(index.image)"
          alt="Image description"
          aspect-ratio="2.5"
          cover
        ></v-img>
        <v-card>
          <v-card-title> {{ index.title }} </v-card-title>
          <v-card-text>
            <h3>Start date: {{ index.start_date }}</h3>
            <h3>Price from: {{ index.start_price }}e</h3>
            <h3>{{ index.location_name }}</h3>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" :to="linkSingle(index.event_id)" dark
              >Get tickets</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "EventsComponent",
  data() {
    return {
      events: [],
    };
  },
  methods: {
    imagePath(image) {
      return this.$baseUrl + "/assets/images/" + image;
    },
    linkSingle(id) {
      return "/single/" + id;
    },
  },
  mounted() {
    this.$axios
      .get(this.$baseUrl + "/models/events/getUpcomingEvents.php")
      .then((data) => {
        console.log(data.data);
        this.events = data.data;
      });
  },
};
</script>
