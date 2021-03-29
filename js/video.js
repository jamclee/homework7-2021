var video = document.querySelector("video")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video")
	video.playbackRate *= 0.95;
	console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video")
	video.playbackRate /= 0.95;
	console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log("New volume level is: " + this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted video volume");
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted video volume");
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime <= video.duration - 15) {
		video.currentTime += 15;
		console.log("Current video location is: " + video.currentTime + " sec");
	}
	else {
		video.currentTime = 0;
		console.log("Current video location is: " + video.currentTime + " sec");
	}
});

document.querySelector("#vintage").addEventListener
("click", function() {
	console.log("Adding oldSchool class")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener
("click", function() {
	console.log("Removing oldSchool class")
	video.classList.remove("oldSchool")
});