module.exports = {
  "presets": [
    [
      {{#unless useTest}}
      "@babel/preset-env", {
        modules: false
      }
      {{#unless}}
      {{#if useTest}}
      "@babel/preset-env"
      {{/if}}
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
    ["@babel/plugin-syntax-dynamic-import"]
  ]
}