module.exports = {
	entry : './main.js', // where we write react code 
	output : {
		path: './',
		filename: 'bundle.js' // where transpiled code
	},
	devServer : {
		inline: true,
		port : 3333 // server port number
	}, 
	module : {  // transpilation process configuration
		loaders : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : 'babel',
				query : {
					presets : ['es2015', 'react']
				}
			}
		]
	}
};
