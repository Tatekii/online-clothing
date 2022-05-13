// craco 修改creat-react-app 配置
const { resolve } = require("path");
module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  webpack: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
