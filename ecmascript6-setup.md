---
layout: module
---
# 1. Setting Up Your Project

Follow the instructions below to install the sample application used as a starting point for this workshop:

1. Clone the [es6-tutorial-data](https://github.com/ccoenraets/es6-tutorial-data/) repository that includes an ECMAScript 5 version of the employee directory application we use in this tutorial:

	```
	git clone https://github.com/ccoenraets/es6-tutorial-data
	```

	> Alternatively, you can just download and unzip [this file](https://github.com/ccoenraets/es6-tutorial-data/archive/master.zip) instead of cloning the repository.

1. Navigate (`cd`) to the `es6-tutorial-data` directory.

1. Type the following command to create a `package.json` file:

    ```
    npm init
    ```

    Press the **Return** key in response to all the questions to accept the default values.
    
1. Install [http-server](https://github.com/indexzero/http-server) in your project. **http-server** is a lightweight web server we use to run the application locally during development and avoid cross domain policy issues when loading data using XMLHttpRequest. 

	```
	npm install http-server --save-dev
	```

1. Open `package.json` in your favorite code editor. In the `scripts` section, remove the **test** script, and add a script named **start** that starts the local web server. The `scripts` section should now look like this:

	```
	"scripts": {
		"start": "http-server"
	},
	```
    
    
1. On the command line, type the following command to start the HTTP server:

    ```
    npm start
    ```
    
    If port 8080 is already in use on your computer, modify the **start** script in `package.json` and specify a port that is available on your computer. For example:

    ```
    "scripts": {
        "start": "http-server -p 9000"
    },
    ```

1. Open a browser and access [http://localhost:8080](http://localhost:8080) to load the application.    

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="ecmascript6-features.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
