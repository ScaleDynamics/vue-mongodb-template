<template>
  <div class="mongodb centered">
    <div class="centered">
      <span><a href="https://www.mongodb.com/">MongoDB</a> in action</span>
    </div>
    <div class="results">
      <pre>{{ JSON.stringify(movies, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
// init ScaleDynamics Platform
import Backend from "backend";

const { fetchMovies } = new Backend();

export default {
  name: "Mongo",
  props: {},
  data: function() {
    return {
      movies: {}
    };
  },
  mounted: function() {
    // fetchMovies from mongodb
    fetchMovies("Star Trek").then(data => (this.movies = data));
  }
};
</script>

<style scoped>
.mongodb {
  margin-top: 10vh;
  font-size: 22px;
  flex-direction: column;
  max-width: 600px;
}

.results {
  margin-top: 1vh;
  font-size: 15px;
  padding: 10px;
  border: 5px solid #fff;
  width: 100%;
  height: 400px;
  overflow: auto;
}
</style>
