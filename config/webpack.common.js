const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
			inject: true,
			title: "{{name}}",
			// favicon: 'src/assets/favicon/favicon.ico',
			minify: {
				removeComments: true
			}
    })
  ],

  module: {
		rules: [
      {
        test: /\.(c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules:true,
              localIdentName:'[name]__[local]__[hash:base64:5]'
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
			'assets': resolve('src/assets'),
			'style': resolve('src/style'),
			'components': resolve('src/components'),
			'pages': resolve('src/pages'),
			'utils': resolve('src/utils')
		},
		extensions: ['.ts', '.tsx', '.js']
	},
}
