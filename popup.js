$(document).ready(function(){
    chrome.tabs.getSelected(null, function(tab){
        console.log(tab);
        console.log(tab.url);
        document.getElementById('keyword-1').innerHTML = 'dogs';
        document.getElementById('keyword-2').innerHTML = 'cats';
        document.getElementById('keyword-3').innerHTML = 'mice';
        document.getElementById('keyword-4').innerHTML = 'horsies';
        document.getElementById('keyword-5').innerHTML = 'cows';
        document.getElementById('art-length').innerHTML = '15';
        document.getElementById('sent-score').innerHTML = '25';
    });
}
);
