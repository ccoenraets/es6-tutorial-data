// XMLHttpRequest wrapper using callbacks
function request(obj, successHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);
    if (obj.headers) {
        Object.keys(obj.headers).forEach(function(key) {
            xhr.setRequestHeader(key, obj.headers[key]);
        });
    }
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            successHandler(xhr.response);
        } else {
            errorHandler(xhr.statusText);
        }
    };
    xhr.onerror = function() {
        errorHandler(xhr.statusText);
    };
    xhr.send(obj.body);
}

request({url:"employees.json"},
    function(data) {
        console.log(data);
        var employees = JSON.parse(data);
        console.log(employees);
        var html = "";
        employees.forEach(function(employee){
            html += "<div><img src='" + employee.picture + "'/><div>" + employee.firstName + " " + employee.lastName + "<p>" + employee.phone + "</p></div></div>";
        });
        document.getElementById("list").innerHTML = html;
    },
    function(error) {
        console.log(error);
    }
);
