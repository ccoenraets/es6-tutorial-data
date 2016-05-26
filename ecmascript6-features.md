---
layout: module
---
# 2. Using New ECMAScript 6 Features

## Step 1: Use New ECMAScript 6 Features

1. Open `js/app.js` in your favorite code editor.

1. Modify the application to use the following ECMAScript 6 features:
    - Replace all `var` definitions with `let`
    - Replace all `function()` definitions with arrow functions
    - Replace string concatenation with template strings
    
    > Do not use ECMAScript 6 promises yet. You will do that in the next module.

## Step 2: Set Up Babel and Webpack

Now that the application uses ECMAScript 6 features, you need to compile it using Babel.

1. Open a command prompt, and navigate (`cd`) to the `es6-tutorial-data` directory.

1. Type the following command to install the Babel and Webpack modules:

	```
	npm install babel-core babel-loader babel-preset-es2015 webpack --save-dev
	```

1. In the `es6-tutorial-data` directory, create a new file named `webpack.config.js` defined as follows:
     
     ```
     var path = require('path');
     var webpack = require('webpack');
     
     module.exports = {
         entry: './js/app.js',
         output: {
             path: path.resolve(__dirname, 'build'),
             filename: 'app.bundle.js'
         },
         module: {
             loaders: [
                 {
                     test: /\.js$/,
                     loader: 'babel-loader',
                     query: {
                         presets: ['es2015']
                     }
                 }
             ]
         },
         stats: {
             colors: true
         },
         devtool: 'source-map'
     };
     ```
	
	
1. Open `package.json` in your favorite code editor. In the `scripts` section, add a script named **webpack** that builds your application using Webpack and Babel. The `scripts` section should now look like this:

	```
	"scripts": {
        "webpack": "webpack",
		"start": "http-server"
	},
	```

1. In the `es6-tutorial-data` directory, create a `build` directory to host the compiled version of the application.
	
## Step 3: Build and Run	

1. On the command line, make sure you are in the `es6-tutorial-data` directory, and type the following command to build the app:

	```
	 npm run webpack
	```

1. Open **index.html** in your code editor, and modify the ```<script>``` tag as follows to load `build/app.bundle.js`, the compiled version of `js/app.js`:

	```
	<script src="build/app.bundle.js"></script>
	```

1. Make sure your local http server is started, open a browser and access [http://localhost:8080](http://localhost:8080).


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="ecmascript6-setup.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="ecmascript6-promisify.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>