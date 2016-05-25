(function() {
    "use strict";
    var template = [
        "{{#.}}",
            "<div>",
                "<img src='{{picture}}' />",
                "<div>",
                    "{{firstName}}",
                    " {{lastName}}",
                    "<p>",
                        "{{phone}}",
                    "</p>",
                "</div>",
            "</div>",
        "{{/.}}"
    ].join('');

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
            document.getElementById("list").innerHTML =
                Mustache.to_html(template, employees);
        },
        error: function(err) {
            console.error(err);
        }
    });
}());
