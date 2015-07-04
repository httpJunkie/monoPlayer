
 (function customAudio() {
		// window.addEventListener('load', init, false);
		
		//global variables
		var audio = document.getElementsByTagName('audio')[0];
		
		//get a reference to the element
  		var playBtn = document.getElementById('play');
		var pausBtn = document.getElementById('paus');
		var stopBtn = document.getElementById('stop');
		var muteBtn = document.getElementById('mute');
		var muteIcon = document.getElementById("muteIcon")
		
		//check to make sure elements were named correctly for this js
		if(playBtn != null){
			playBtn.addEventListener('click', playAudio, false );
		}
		if(pausBtn != null){
			pausBtn.addEventListener('click', pausAudio, false );
		}
  		if(muteBtn != null){
			muteBtn.addEventListener('click', muteAudio, false );
		}
		if(stopBtn != null){
			stopBtn.addEventListener('click', stopAudio, false );
		}
		
		function playAudio() {
			if(audio.paused && !audio.muted && audio.currentTime <= 0) {
				audio.play();
			}
			else if (!audio.paused && audio.muted && audio.currentTime > 0) {
				audio.muted = false;
			  	muteIcon.className = "icon-mute_off";
			}
			else if (audio.paused && !audio.muted && audio.currentTime > 0) {
				audio.play();
			}	
			else if (audio.paused && audio.muted && audio.currentTime > 0) {
				audio.play();
				audio.muted = false;
				muteIcon.className = "icon-mute_off";
			}
		}
		
		function pausAudio() {
			audio.pause();
		}
		
		function muteAudio() {
			if(audio.paused && !audio.muted && audio.currentTime <= 0) {
				audio.muted = false;
			}
			else if(!audio.paused && !audio.muted  && audio.currentTime > 0) {
				audio.muted = true;
				muteIcon.className = "icon-mute_on";
			}
			else if(!audio.paused && audio.muted == true) {
			  	audio.muted = false;
			  	muteIcon.className = "icon-mute_off";
			}
		}
		
		function stopAudio() {
			if (audio.paused && audio.muted && audio.currentTime > 0) {
				audio.muted = false;
			  	muteIcon.className = "icon-mute_off";
				audio.pause();
				audio.currentTime = 0;
			}
			else if(!audio.paused && audio.muted && audio.currentTime > 0) {
				audio.muted = false;
			  	muteIcon.className = "icon-mute_off";
				audio.pause();
				audio.currentTime = 0;
			}
			else if(audio.paused && audio.currentTime > 0) {
				audio.pause();
				audio.currentTime = 0;
			}
			else if(!audio.paused && audio.currentTime > 0){
				audio.pause();
				audio.currentTime = 0;
			}
		}
 }());