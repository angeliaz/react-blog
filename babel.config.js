module.exports = {
  presets: [["@babel/preset-react", {
    useBuiltIns: "entry",
    corejs: 2
  }], "@babel/preset-env"],
  plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime']
}