console.log("Hello World!");

let vinyl = document.querySelector(".vinyl");

let isPaused = false
const moveVinyl = (event) => {
	console.log(event);
	if (!isPaused){
	  if (event === 1){		// Play Vinyl
	    TweenMax.to(vinyl, 2, {rotation:360, repeat:-1, ease:Linear.easeInOut})
	    console.log("Playing Vinyl");
	  } else if (event === 2){		// Hover Vinyl
	    TweenMax.to(vinyl, 2, {rotation:360, repeat: 0, ease:Back.easeOut})
			isPaused = true
			console.log("Hover Vinyl");
	  } else if (event === 3) {		// Stop Vinyl
	    TweenMax.to(".vinyl", 1, {
			  y: function() {
			    return Math.random() * 300;
			  	}
				});
	    isPaused = true
	  }
	}
}

// let playButton = document.querySelectorAll("button")[0].addEventListener("click", console.log("Click"));
let playButton = document.querySelectorAll("button")[0].addEventListener("click", moveVinyl);
// let stopButton = document.querySelectorAll("button")[1].addEventListener("click", moveVinyl(3));