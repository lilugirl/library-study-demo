const nodeResolve = require("rollup-plugin-node-resolve");
const common = require("./rollup");
module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.aio.js",
    format: "umd",
    name: "clone",
    banner: common.banner,
  },
  plugins: [
    common.getCompiler(),
    ['@babel/plugin-transform-runtime',{
      corejs:2
  }],
    nodeResolve({
      main: true,
    }),
  ],
};
