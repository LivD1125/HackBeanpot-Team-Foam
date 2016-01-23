// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function request(file) {
    var filename = file;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            xhttp.responseType = 'json';
            xhttp.onload = function () {
                // Parse and process the response from the
                var response = xhttp.response;
                if (!response || !response.responseData || !response.responseData.results ||
                    response.responseData.results.length === 0) {
                    errorCallback('No response from the Server!');
                    return;
                }
            }
        }
        ;
        xhttp.open("GET", filename, true);
        xhttp.send();
    };
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('anything?');
    var element = document.getElementById("keyword-1");
    element.innerHTML = "Maybe this will work!";
});
