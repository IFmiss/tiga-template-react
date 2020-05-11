module.exports = function (api) {
  api.cache(false)

  const presets = [
    [
      "@babel/preset-env", {
        modules: false
      }
    ],
    '@babel/preset-react',
    {{#if useTypeScript}}
      '@babel/preset-typescript'
    {{/if}}
  ]
  const plugins = [
    {{#equal useStore 'mobx'}}
      [
        '@babel/plugin-proposal-decorators', {
          legacy: true 
        }
      ],
      [
        '@babel/plugin-proposal-class-properties', {
          loose : true
        }
      ],
    {{/equal}}
    '@babel/plugin-syntax-dynamic-import'
  ]

  return {
    presets,
    plugins
  }
}