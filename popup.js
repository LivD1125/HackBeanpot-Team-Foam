$(document).ready(function(){
    chrome.tabs.getSelected(null, function(tab){
        console.log(tab);
        console.log(tab.url);
        //document.getElementById('keyword-1').innerHTML = 'dogs';
        $.post(
			    'http://0.0.0.0:5000/',
			    {'url': tab.url}
			    ).then(function(result){console.log(result)});

    });
}
);
