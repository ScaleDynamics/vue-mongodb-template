<template>
  <div class="app">
    <img src="./assets/logo.png" class="sd-logo" alt="ScaleDynamics" />
    <hello />
    <div class="hello">
      <span>
        Learn about
        <a href="https://docs.scaledynamics.com/docs/" target="_blank" rel="noreferrer">
          ScaleDynamics Platform
        </a>
        and
        <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> Vue </a>
      </span>
    </div>

    <div class="mongodb">
      <span>
        You can see{{ " " }}
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> mongodb </a
        >{{ " " }} in action in your dev console {{ ">" }}
      </span>
    </div>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";

export default {
  name: "App",
  components: {
    Hello
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

span > a {
  color: bisque;
}

.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mongodb {
  margin-top: 20vh;
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
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
