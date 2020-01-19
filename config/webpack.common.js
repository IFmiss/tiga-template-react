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
			'@utils': resolve('./../src/utils')
		},
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	},
}
