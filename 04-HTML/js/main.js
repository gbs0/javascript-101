const tl = new TimelineMax({paused:true});

const vinyl = document.querySelector(".vinyl");
const playButton = document.querySelectorAll("button")[0];
const reverseButton = document.querySelectorAll("button")[1];
const stopButton = document.querySelectorAll("button")[2];

tl.to(vinyl, 1, {rotation:360, repeat:-1, ease:Linear.easeInOut}); 

playButton.onclick = function() {
  tl.play();
  console.log("Playing vinyl");
}

stopButton.onclick = function() {
  tl.pause();
	console.log("Pause vinyl");
}

reverseButton.onclick = function() {
	tl.reverse();
	console.log("Reverse vinyl");
}