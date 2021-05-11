<template>
  <h3 v-if="message">{{ message }}</h3>
  <h3 v-else>... Error when trying to get the welcome message</h3>
</template>

<script>
// init ScaleDynamics Platform
import Backend from "hello";

const { hello, fetchMovies } = new Backend();

export default {
  name: "Hello",
  props: {},
  data: function() {
    return {
      message: ""
    };
  },
  mounted: function() {
    hello().then(msg => {
      this.message = msg;
    });

    // fetchMovies from mongodb
    fetchMovies("Star Trek").then(data => console.log(data));
  }
};
</script>
