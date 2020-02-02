module.exports = {
  presets: [
    [
      {{#unless useTest}}
      "@babel/preset-env", {
        modules: false
      }
      {{/unless}}
      {{#if useTest}}
      {{#if useTypeScript}}
      "@babel/preset-env", {
        modules: false
      }
      {{/if}}
      {{#unless useTypeScript}}
      "@babel/preset-env"
      {{/unless}}
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