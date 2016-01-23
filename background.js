/* background.js */
chrome.browserAction.onClicked.addListener(function(tab) {
	alert('inside background.js')
    chrome.tabs.executeScript(tab.id, {file: "link.js"});
});