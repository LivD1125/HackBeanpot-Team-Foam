var URL = location.href;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert('Finished downloading ' + document.title);
    } else if (xmlhttp.readyState == 4) {
        alert('Something went wrong: ' + xmlhttp.status);
    }
}
xmlhttp.open('POST', 'http://localhost:8080/', true);
xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xmlhttp.send('url=' + encodeURIComponent(URL));