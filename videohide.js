$('.video').livequery(function() {
	var videos = document.getElementsByClassName('video');
	for(i = 0; i < videos.length; i++){
		videos[i].parentNode.removeChild(videos[i]);
	}
});
