---
layout: module
---
# 3. Promisify XMLHttpRequest

1. Open `js/app.js` in your favorite code editor.

1. At the top of the file, modify the `request()` function definition as follows:
    - Remove the `successHandler` and `errorHandler` arguments in the function signature
    - Modify the function body to return an ECMAScript 6 promise
    - Instead of calling `successHandler()`, resolve the promise
    - Instead of calling `errorHandler()`, reject the promise
    
1. Modify the call to the `request()` function. Replace the old callback functions with the ECMAScript 6 `.then()` and `.catch()` syntax.

1. On the command line, make sure you are in the `es6-tutorial-data` directory, and type the following command to build the app:

	```
	 npm run webpack
	```

1. Make sure your local http server is started, open a browser and access [http://localhost:8080](http://localhost:8080).


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="ecmascript6-data-es6-features.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="ecmascript6-data-modules.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
