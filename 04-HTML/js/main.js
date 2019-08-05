console.log("Hello World!");

let fan = document.querySelector(".vinyl");

let isPaused = false
const moveVinyl = (n) => {
	if (!isPaused){
	  if (n === 1){		// Play Vinyl
	    TweenMax.to(fan, 2, {rotation:360, repeat:-1, ease:Linear.easeInOut})
	    console.log("Playing Vinyl");
	  } else if (n === 2){		// Hover Vinyl
	    TweenMax.to(fan, 2, {rotation:360, repeat: 0, ease:Back.easeOut})
			isPaused = true
			console.log("Hover Vinyl");
	  } else if (n === 3) {		// Stop Vinyl
	    TweenMax.to(".vinyl", 1, {
			  y: function() {
			    return Math.random() * 300;
			  	}
				});
	    isPaused = true
	  }
	}
}

let playButton = document.querySelectorAll("button")[0].addEventListener("click", moveVinyl(1));