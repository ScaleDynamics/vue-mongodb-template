<template>
  <div class="app">
    <img src="./assets/logo.png" class="sd-logo" alt="ScaleDynamics" />
    <hello />
    <mongo />
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
import Mongo from "./components/Mongo.vue";

export default {
  name: "App",
  components: {
    Hello,
    Mongo
  }
};
</script>

<style>
.app {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
  margin: 0 !important;
}

.sd-logo {
  width: 600px;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

span > a {
  color: bisque;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
</style>
