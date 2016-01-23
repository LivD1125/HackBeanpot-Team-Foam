// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function request() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            // Action to be performed when the document is read;
        }
    };
    xhttp.open("GET", "filename", true);
    xhttp.send();
};

document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById("keyword-1");
    element.innerHTML = "Maybe this will work!";
});
