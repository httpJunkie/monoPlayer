/*
	monoPlayer.js
	Version: 0.1
*/

var monoPlayer = (function () {
	 
	// Initialize buttons on page load	
	window.addEventListener('load', initPlayer, false);
	
	// global audio variable (right now just grabs the first track)
	var audio = document.getElementsByTagName('audio')[0];
	audio.ontimeupdate = updateTime;
	
	//Global Player Settings
	var hourPlusWidth = "180px";
	
	// variables for each button
	var playBtn = document.getElementById('play');
	var pauseBtn = document.getElementById('pause');
	var stopBtn = document.getElementById('stop');
	var muteBtn = document.getElementById('mute');
	var muteIcon = document.getElementById('muteIcon');
	var monoPlayerDiv = document.getElementById('monoPlayer');
	var audioTime = document.getElementById("audioTime");
	
	// debug/warning variables
	var alertProblemButtons = false;
	
	// icon style variables
	var muteOnClass = "icon-mute_on";
	var muteOffClass = "icon-mute_off";
	
	
	// InitializePlayer and buttons
	function initPlayer() {
		
		if(playBtn != null){
			playBtn.addEventListener('click', playAudio, false);
		} else {
			console.log('Play button class is not named "play"');
			alertProblemButtons = true;
		}
		
		if(pauseBtn != null){
			pauseBtn.addEventListener('click', pauseAudio, false );
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
		
		var isHourLong = (function() {
			var audioSeconds = Math.round(audio.duration);
			audioSeconds > 3600 ? audio.isHourLong = true : audio.isHourLong = false;
			console.log("Is hour long? " + audio.isHourLong);
		})();

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
			hourLongResize()
		}
	}
	
	function hourLongResize() {
		if (audio.isHourLong) {
			monoPlayerDiv.style.width = hourPlusWidth;
			console.log("monoPlayer has been resized to: " + hourPlusWidth
				+ " to compensate for longer track time display")
		}
	}
	
	// function called by the pause button
	function pauseAudio() {
		audio.pause();
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
	
	// function that updates elapsed time and displays it
	function updateTime() {
		audioTime.innerHTML = convertTime(audio.currentTime);
	}
	
	function convertTime(timeInSeconds) {
		timeInSeconds = Math.round(timeInSeconds);
		var hours = Math.floor(timeInSeconds / 3600);
		var minutes = Math.floor(timeInSeconds / 60) % 60;
		var seconds = Math.ceil(timeInSeconds) % 60;
		
		var displayTime = hours < 1 ?
			 formatTime(minutes) + ":" + formatTime(seconds) : 
				formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds)
	
		return displayTime;
		
		function formatTime(time) {
			var formattedTime = time < 10 ? "0" + time.toString() : time;
			return formattedTime;
		}
	}
	
} ());