## Synopsis

monoPlayer

The icons are from MFG Labs and is open source.  
http://mfglabs.github.io/mfglabs-iconset/  
https://github.com/MfgLabs/mfglabs-iconset  
http://creativecommons.org/licenses/by/3.0/deed.en  
http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL  

The music (Jack Mono - Le Rayon Vert) is produced by myself and you are free to do with it as you please for demo purposes only, however, you must link back to httpJunkie.com or me (Eric Bishard aka Jack Mono) if you use it in anything that is visible to humans or the internet. If it's just for your cats, don't worry about it. If you use the music in any way that you stand to make a profit that is considered to be a prohibited use unless cleared through me personally in writing.

## Code Example

To include the code in your poject copy the `monoplayer` folder into your project:  

Put the folowing code in your `<head>` tag:  

```
	<link rel="stylesheet" href="monoPlayer/icons/mfglabs_iconset.css">
	<link rel="stylesheet" href="monoPlayer/css/monoPlayer.css">
	<script src="monoPlayer/js/monoPlayer.js"></script>
```

Link to your primary and backup audio files in your `<body>` section.  

```
	<audio>
		<source src="monoPlayer/audio/JackMono-LeRayonVert.mp3" type="audio/mpeg">
		<source src="monoPlayer/audio/JackMono-LeRayonVert.ogg" type="audio/ogg">
	</audio>
```

Use the following template anywhere on your page, but inside the `<body>` section.  

```
	<div class="monoPlayer">
		<button id="play" class="btn"><i class="icon-play"></i></button>
		<button id="paus" class="btn"><i class="icon-pause"></i></button>
		<button id="stop" class="btn"><i class="icon-stop"></i></button>
		<button id="mute" class="btn"><i id="muteIcon" class="icon-mute_off"></i></button>
	</div>
```

Finally, link to the JavaScript file near the end of your `<body>` section.  

```
	<script src="monoPlayer/js/monoPlayer.js"></script>
```

## Motivation

I needed a simple audio player for a project that had no audio scrubber, simply play, stop, pause and mute buttons. It needed to be small so that it could load below the product and the client wanted the user to listen in entirety, not to skip around. The widget needed to be completely customizable if needed but out of the box they wanted it to appear similar to the HTML5 audio controls. They did not want to purchase a widgt or control from a thrid party and the deliverable was to be something that their team could easily implement and again customize if needed. Considering the request, I made the the deal contingent on the fact that the control would be open source and I would not charge them. The initial code and commit took me 2 hours to write and is very basic and minimal, just as intended. It's written in JavaScript using the HTML5 Audio API.

## Installation

Provide code examples and explanations of how to get the project.

## Contributors

This is a very small project that anyone can get involved with an make a difference. I am open for any extensibility ideas, configuration parameters, componentizing and anything to add features so that it can be further customized by the user. I am a novice in building open source JavaScript & CSS components, so any ideas on how to make the projectmore streamliine, accessible and ideas on build processes or tooling we can add to make it easier to install through the command line would be great.

## License

A short snippet describing the license (MIT, Apache, etc.)
