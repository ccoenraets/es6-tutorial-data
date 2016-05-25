(function() {
    "use strict";
    function request(o) {
        var xhr = new XMLHttpRequest();
        xhr.timeout = 5000;
        xhr.overrideMimeType("application/json; charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.status === 200 && xhr.readyState === 4) {
                o.success(xhr.response);
            }
        };
        xhr.ontimeout = function() {
            o.error("Requested timeout " + o.url);
        };
        xhr.onerror = function() {
            o.error("An error occurred while transerring " + o.url);
        };
        xhr.open(o.method || "GET", o.url, true);
        xhr.send(null);
    }

    request({
        url: "employees.json",
        method: "GET",
        success: function(data) {
            var employees = JSON.parse(data);
            var html = "";
            employees.forEach(function(employee){
                html += "<div><img src='" + employee.picture + "'/><div>" + employee.firstName + " " + employee.lastName + "<p>" + employee.phone + "</p></div></div>";
            });
            document.getElementById("list").innerHTML = html;
        },
        error: function(err) {
            console.error(err);
        }
    });
}());
