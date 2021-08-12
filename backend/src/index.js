const { fetchMovies } = require("./mongodb");

const hello = () => {
  return `Hello from ScaleDynamics Platform, Vue and Node.js ${process.version} !`;
};

module.exports = { hello, fetchMovies };
