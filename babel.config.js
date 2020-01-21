module.exports = {
  "presets": [
    [
      "@babel/preset-env", {
        modules: false
      }
    ],
    ["@babel/preset-react"]
  ],
  plugins: [
    {{#unless useTypeScript}}
    {{#equal useStore 'mobx'}}
    [
      "@babel/plugin-proposal-decorators", {
        legacy: true 
      }
    ],
    [
      "@babel/plugin-proposal-class-properties", {
        loose : true
      }
    ],
    {{/equal}}
    {{/unless}}
    ["@babel/plugin-syntax-dynamic-import"],
  ]
}