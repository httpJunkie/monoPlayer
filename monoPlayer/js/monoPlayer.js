/*
	monoPlayer.js
	Version: 0.1
*/

var monoPlayer = (function () {
	 
	// Initialize buttons on page load	
	window.addEventListener('load', initButtons, false);
	
	// global audio variable (right now just grabs the first track)
	var audio = document.getElementsByTagName('audio')[0];
	
	// variables for each button
	var playBtn = document.getElementById('play');
	var pauseBtn = document.getElementById('pause');
	var stopBtn = document.getElementById('stop');
	var muteBtn = document.getElementById('mute');
	var muteIcon = document.getElementById('muteIcon');
	
	// debug/warning variables
	var alertProblemButtons = false;
	
	// icon style variables
	var muteOnClass = "icon-mute_on";
	var muteOffClass = "icon-mute_off";
	
	// check to make sure elements were named correctly in html
	function initButtons() {
		
		if(playBtn != null){
			playBtn.addEventListener('click', playAudio, false);
		} else {
			console.log('Play button class is not named "play"');
			alertProblemButtons = true;
		}
		
		if(pauseBtn != null){
			pauseBtn.addEventListener('click', pausAudio, false );
		} else {
			console.log('Pause button class is not named "pause"');
			alertProblemButtons = true;
		}
		
		if(muteBtn != null){
			muteBtn.addEventListener('click', muteAudio, false );
		} else {
			console.log('Mute button class is not named "mute"');
			alertProblemButtons = true;
		}
		
		if(stopBtn != null){
			stopBtn.addEventListener('click', stopAudio, false );
		} else {
			console.log('Stop button class is not named "stop"');
			alertProblemButtons = true;
		}
		
		if (alertProblemButtons) {
			alert('WARNING:' + '\n' + 'Problem with monoPlayer buttons "see console logs"');
		}
		
		// console.log("Loaded track is: "+ Math.round(audio.duration) +" seconds long");
		// console.log("Loaded track playback rate is: " + audio.playbackRate);
		
	}
	
	// function called by the play button
	function playAudio() {
		
		if (!audio.paused && audio.muted && audio.currentTime > 0) {
			audio.muted = false;
		  	muteIcon.className = muteOffClass;
		}
		
		else if (audio.paused && audio.muted && audio.currentTime > 0) {
			audio.muted = false;
			muteIcon.className = muteOffClass;
			audio.play();
		}
		
		else if (audio.paused && !audio.muted && audio.currentTime > 0) {
			audio.play();
		}
		
		if(audio.paused && !audio.muted && audio.currentTime <= 0) {
			audio.play();
		}
		
	}
	
	// function called by the pause button
	function pausAudio() {
		audio.pause();
	}
	
	// function called by the mute button
	function muteAudio() {
		
		if(audio.paused && !audio.muted && audio.currentTime <= 0) {
			audio.muted = false;
		}
		
		else if(!audio.paused && !audio.muted  && audio.currentTime > 0) {
			audio.muted = true;
			muteIcon.className = muteOnClass;
		}
		
		else if(!audio.paused && audio.muted == true) {
		  	audio.muted = false;
		  	muteIcon.className = muteOffClass;
		}
		
	}
	
	// function called by the stop button
	function stopAudio() {
		
		if (audio.paused && audio.muted && audio.currentTime > 0) {
			audio.currentTime = 0;
			audio.pause();
			audio.muted = false;
			muteIcon.className = muteOffClass;
		}
		
		else if (!audio.paused && audio.muted && audio.currentTime > 0) {
			audio.currentTime = 0;
			audio.pause();
			audio.muted = false;
		  	muteIcon.className = muteOffClass;
		}
		
		else if(audio.paused && audio.currentTime > 0) {
			audio.currentTime = 0;
			audio.pause();
		}
		
		else if(!audio.paused && audio.currentTime > 0){
			audio.currentTime = 0;
			audio.pause();
		}
		
	}
		
 }());