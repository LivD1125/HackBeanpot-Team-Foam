var URL = location.href;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //xmlhttp.responseType = 'JSON';
        xmlhttp.onload = function() {
            // Parse and process the response from the
            var response = xmlhttp.response;
            console.log(response);
            return response;
        };
        console.log('it is successful');
    } else if (xmlhttp.readyState == 4) {
        console.log('it failed');
        alert('Something went wrong: ' + xmlhttp.status);
    }
};
//xmlhttp.open('POST', 'http://localhost:8080/', true);
//xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//xmlhttp.send('url=' + encodeURIComponent(URL));
xmlhttp.open('GET', 'http://localhost:3000/hello.html', true);
xmlhttp.send();

//chrome.runtime.onMessage.addListener(
//    function(request, sender, sendResponse) {
//        if( request.message === "clicked_browser_action" ) {
//            var firstHref = 'something happened';
//
//            console.log(firstHref);
//        }
//    }
//);

document.addEventListener('DOMContentLoaded', function() {
    console.log('anything?');
    var element = document.getElementById("keyword-1");
    element.innerHTML = "Maybe this will work!";
});
