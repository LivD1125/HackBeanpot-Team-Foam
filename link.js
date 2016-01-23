var URL = location.href;
var xmlhttp = new XMLHttpRequest();
alert('inside link.js')
//document.getElementById("keyword-1").innerHTML="ads";
xmlhttp.onreadystatechange = function() {
	alert('inside link.js onreadystatechange')
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert('Finished downloading ' + document.title);
        document.getElementById("sentiment").innerHTML=URL;
        //document.getElementById("keyword-1").innerHTML=URL;
    } else if (xmlhttp.readyState == 4) {
        alert('Something went wrong: ' + xmlhttp.status);
    }
    else{
		alert('inside link.js "else clause", state:' + xmlhttp.readyState)
    }
}
//var url = 'http://0.0.0.0:5000/';
//var xhr = createCORSRequest('POST', url);
//xhr.send();

xmlhttp.open('POST', 'http://0.0.0.0:5000/', true);
xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xmlhttp.send('url=' + encodeURIComponent(URL));
alert('url sent ' + URL)