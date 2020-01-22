const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

const devMode = process.env.NODE_ENV === "development"

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
			inject: true,
			title: "{{name}}",
			favicon: 'src/assets/favicon.ico',
			minify: {
				removeComments: true
			}
    }),
    new MiniCssExtractPlugin ({
			filename: "css/[name]-[hash].css",
  		chunkFilename: "css/[name]-[hash].css"
		}),
  ],

  module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader'
      },
      {{#if useTypeScript}}
			{
				test: /\.(ts|tsx)$/,
				use: [
					{loader: 'babel-loader',},
					{
						loader: 'ts-loader',
						options: {
							// 加快编译速度
							transpileOnly: true,
							// 指定特定的ts编译配置，为了区分脚本的ts配置
							configFile: path.resolve(__dirname, './../tsconfig.json')
						}
					}
				]
			},
			{{/if}}
      {
        test: /\.(c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules:true
            }
          },
          {
            loader:"postcss-loader",
            options: {
                plugins: () => [
                    require('autoprefixer')()
                ]
            }
          },
        ]
      },
      {{#equal useStyle 'less'}}
      {
				test: /\.less$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					"css-loader",
					"less-loader",
					{
						loader: 'style-resources-loader',
						options: {
							patterns: path.resolve(__dirname, './../src/styles/val.less')
						}
					}
				],
      },
      {{/equal}}
      {{#equal useStyle 'scss'}}
      {
				test: /\.(sc|sa)ss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
					{
						loader: 'style-resources-loader',
						options: {
							patterns: path.resolve(__dirname, './../src/styles/val.scss')
						}
					}
				],
      },
      {{/equal}}
      {
				test: /\.(ttf|eot|woff|woff2)$/,
				use: [
					{
						loader: 'url-loader'
					}
        ]
      },
      {
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
        ]
			}
    ]
  },

  resolve: {
		alias: {
      '@api': resolve('./../src/api'),
      '@assets': resolve('./../src/assets'),
      '@components': resolve('./../src/components'),
      '@constance': resolve('./../src/constance'),
      '@store': resolve('./../src/store'),
			'@styles': resolve('./../src/styles'),
			'@views': resolve('./../src/views'),
			'@utils': resolve('./../src/utils'),
			'@router': resolve('./../src/router')
		},
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	},
}
