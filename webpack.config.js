 const path = require('path');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");

 const extractSass = new ExtractTextPlugin({
    filename: "[name].min.css",
    disable: process.env.NODE_ENV === "development"
});
 
  module.exports = [
		{
			entry: {
					tc: './src/arctravelconnect.js',
					tc_hl: './src/arctravelconnect-highlights.js'
			},
			output: {
				filename: '[name].min.js',
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
					},
					{
						test: /\.scss$/,
						use: extractSass.extract({
								use: [{
										loader: "css-loader"
								}, {
										loader: "sass-loader"
								}],
								fallback: "style-loader"
						})
					}
				]
			},
			resolve: {
				alias: {
					'masonry': 'masonry-layout',
					'isotope': 'isotope-layout'
				}
			},
			plugins: [
        extractSass
			]
		}
  ];