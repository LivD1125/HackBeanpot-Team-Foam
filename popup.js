$(document).ready(function(){
    chrome.tabs.getSelected(null, function(tab){
        console.log(tab);
        console.log(tab.url);
        document.getElementById('keyword-1').innerHTML = 'dogs';
    });
}
);
