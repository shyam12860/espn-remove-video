// Injecting the required JQuery
var j = document.createElement('script');
j.src = chrome.extension.getURL('jquery.livequery.min.js');
// Injecting videohide.js into the document for espnfc
var s = document.createElement('script');

s.src = chrome.extension.getURL('videohide.js');
/*s.onload = function() {	
	s.parentNode.removeChild(s);
}*/
(document.head || document.documentElement).appendChild(j).appendChild(s);
