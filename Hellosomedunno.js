(function(){
	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function(name) {
		console.log(speakword + " " + name);
		}

	window.helloSpeaker = helloSpeaker;
})();