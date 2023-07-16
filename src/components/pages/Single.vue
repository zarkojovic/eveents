<template>
  <div>
    <v-container>
      <v-btn to="/">Go Back</v-btn>
      <br />
      <br />
      <v-img
        :src="imagePath(event.image)"
        alt="Image description"
        aspect-ratio="2.3"
        cover
      ></v-img>
      <h1>
        {{ event.title }}
      </h1>
      <h1>
        {{ event.description }}
      </h1>
      <h1>
        {{ event.city }}
      </h1>
      <h1>
        {{ event.location_name }}
      </h1>
      <br />
      <h2>{{ getStringDate(firstDate, lastDate) }}</h2>
      <h2>Categories: {{ getCategoriesString }}</h2>

      <br />
      <br />
      <br />
      <v-select
        v-model="selectedItem"
        :items="dates"
        label="Select an item"
        outlined
      ></v-select>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "SingleComponent",
  data() {
    return {
      selectedItem: null,
      event: null,
      dates: null,
      categories: null,
    };
  },
  methods: {
    imagePath(name) {
      return this.$baseUrl + "/assets/images/" + name;
    },
    getStringDate(start, end) {
      if (start == end) {
        const sDate = new Date(start);
        const day = sDate.getDate();
        const month = sDate.toLocaleDateString("default", { month: "long" });
        const year = sDate.getFullYear();

        const formattedDate = `Only on : ${day} ${month} ${year}`;
        return formattedDate;
      } else {
        const sDate = new Date(start);
        const eDate = new Date(end);
        const sDay = sDate.getDate();
        const sMonth = sDate.toLocaleDateString("default", { month: "long" });
        const sYear = sDate.getFullYear();
        const eDay = eDate.getDate();
        const eMonth = eDate.toLocaleDateString("default", { month: "long" });
        const eYear = eDate.getFullYear();
        const formattedDate = `From ${sDay} ${sMonth} ${sYear} To ${eDay} ${eMonth} ${eYear} `;
        return formattedDate;
      }
    },
  },
  computed: {
    firstDate() {
      return this.dates[0].date;
    },
    lastDate() {
      return this.dates[this.dates.length - 1].date;
    },
    getCategoriesString() {
      return this.categories.map((obj) => obj.category_name).join(", ");
    },
  },
  mounted() {
    let that = this;
    if (this.username != "guest") {
      let key = localStorage.getItem("token");
      if (key == null) {
        console.log("GRESKA!");
      }
      this.$axios
        .get(this.$baseUrl + "/models/events/getSingleEvent.php", {
          params: {
            event_id: that.$route.params.id,
          },
          headers: {
            Authorization: "Bearer " + key,
          },
        })
        .then((data) => {
          console.log(data.data);
          that.event = data.data[0];
          that.dates = data.data[1];
          that.categories = data.data[2];
        });
    }
  },
};
</script>
