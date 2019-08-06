const tl = new TimelineMax({paused:true});

const vinyl = document.querySelector(".vinyl");
const playButton = document.querySelectorAll("button")[0];
const reverseButton = document.querySelectorAll("button")[1];
const stopButton = document.querySelectorAll("button")[2];

tl.to(vinyl, 1, {rotation:360, repeat:-1, ease:Linear.easeInOut}); 

let IsPaused = false

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

// let isPaused = false
// const moveVinyl = (event) => {
// 	if (!isPaused){
// 	  if (event === 1){		// Play Vinyl
// 	    TweenMax.to(vinyl, 2, {rotation:360, repeat:-1, ease:Linear.easeInOut});
// 	    console.log("Playing Vinyl");
// 	  } else if (event === 2){		// Hover Vinyl
// 	    TweenMax.to(vinyl, 2, {rotation:360, repeat: 0, ease:Back.easeOut});
// 			console.log("Hover Vinyl");
// 	  } else if (event === 3) {		// Stop Vinyl
// 	    TweenMax.to(".vinyl", 1, {
// 			  y: function() {
// 			    return Math.random() * 300;
// 			  	}
// 				});
// 	    isPaused = true
// 	  }
// 	}
// }

// const playButton = document.querySelectorAll("button")[0].addEventListener("click", moveVinyl);
// const stopButton = document.querySelectorAll("button")[1].addEventListener("click", moveVinyl);