---
layout: module
---
# 4. Modularizing Data Services

## Step 1: Modularizing `request`

1. In the `/js` directory, create a new file named `request.js`

1. Move the `request()` function definition from `app.js` into `request.js`

1. Export that function as the **default** function for the module

1. In `app.js`, import the `request` module to make the request function available

    ```
    import request from './request';
    ```

1. Build the app:

	```
	 npm run webpack
	```

1. Make sure your local http server is started, open a browser and access [http://localhost:8080](http://localhost:8080).


## Step 2: Create a Data Service

1. In the `/js` directory, create a new file named `employee-service.js`

1. In `employee-service.js`, import the `request` module

    ```
    import request from './request';
    ```

1. Create a `findAll()` method implemented as follows:

    ```
    export let findAll = () => {
        return request({url:"employees.json"})
            .then(data => data = JSON.parse(data))
    }
    ```

1. In `app.js`, remove the `request` import and import the `employee-service` module instead:

    ```
    import * as service from "./employee-service";
    ```

1. Replace the call to `request()` with a call to `findAll()` in the `employee-service` module:

    ```
    service.findAll()
        .then(employees => {
            let html = "";
            employees.forEach(function(employee){
                html += `<div>
                            <img src='${employee.picture}'/>
                            <div>
                                ${employee.firstName} ${employee.lastName}
                                <p>${employee.phone}</p>
                            </div>
                        </div>`;
            });
            document.getElementById("list").innerHTML = html;
        })
        .catch(error => console.log(error)
    );
    ```

1. Build the app:

	```
	 npm run webpack
	```

1. Make sure your local http server is started, open a browser and access [http://localhost:8080](http://localhost:8080).


## Step 3: Creating a Mock Service

1. In the `/js` directory, create a new file named `employee-service-mock.js`

1. In `employee-service-mock.js`, define an array holding your mock data.

    ```
    let employees = [
      {
        id: 1,
        firstName: "Amy",
        lastName: "Taylor",
        phone: "617-564-3254",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
      },
      {
        id: 2,
        firstName: "Anup",
        lastName: "Gupta",
        phone: "617-564-1258",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
      }
    ];
    ```

1. Create function named `findAll` defined as follows:

    ```
    export let findAll = () => new Promise(resolve => resolve(employees));
    ```
    
    Highlights: 
    - The function has the same signature as the `findAll()` function defined in `employee-service.js`
    - The function returns the in-memory array as opposed to making a REST call for data

1. In `app.js`, change the import statement to import `employee-service-mock` instead of `employee-service`

1. Build the app:

	```
	 npm run webpack
	```

1. Make sure your local http server is started, open a browser and access [http://localhost:8080](http://localhost:8080).



<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="ecmascript6-promisify.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
</div>
</div>
