const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const resolve = function (dir) {
	return path.resolve(__dirname, dir);
}

module.exports = merge(common, {
  mode: 'development',
  entry: {
		{{#if useTypeScript}}
		app: './src/index.tsx'
		{{/if}}
		{{#unless useTypeScript}}
		app: './src/index.jsx'
		{{/unless}}
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'js/[name]-[hash].js'
  },

  module: {
		rules: [
		]
	},

  devServer: {
		// 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
		// contentBase: "./",
		host: '0.0.0.0',
		// 端口号
		port: 1994,
		//当有编译器错误或警告时，在浏览器中显示全屏覆盖。默认禁用。如果您只想显示编译器错误：
		noInfo: true,
		// 配置端口号
		overlay: true,
		historyApiFallback: true
  }
})
