//console.log($('h1'));
//chrome.runtime.sendMessage({action: 'get_info'}, function(res) {
//    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//        if( request.message === 'add_information') {
//            console.log('hmmmmmmm');
//            console.log(request.object);
//        }
//    });
//});
//
$(document).ready(function(){
    chrome.tabs.getSelected(null, function(tab){
        console.log(tab);
        console.log(tab.url);
        document.getElementById('keyword-1').innerHTML = 'dogs';
    });
}
);




//chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//    if( request.message === 'add_information') {
//        console.log('hmmmmmmm');
//        console.log(request.object);
//    }
//});