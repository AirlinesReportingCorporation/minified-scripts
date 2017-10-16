 const path = require('path');

  module.exports = {
    entry: './src/arctravelconnect.js',
    output: {
      filename: 'arctravelconnect.min.js',
      path: path.resolve(__dirname, 'dist')
    },
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				}
			]
		},
		resolve: {
			alias: {
				'masonry': 'masonry-layout',
				'isotope': 'isotope-layout'
			}
		}
  };