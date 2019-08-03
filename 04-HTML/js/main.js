console.log("Hello World!");

let fan = document.querySelector(".vinyl");

// TweenMax.to(fan, 2, {rotation:360, repeat:-1, ease:Linear.easeInOut})


// Código de descer
// TweenMax.to(".box", 1, {
//   y: function() {
//     return Math.random() * 300;
//   }
// });


let isPaused = false
  const moveVinyl = (n) => {
  // let lamp = document.getElementById("lamp")
  if (!isPaused){
    // Play Vinyl
    if (n === 1){
      // Stop
			TweenMax.to(fan, 2, {rotation:360, repeat: 0, ease:Back.easeOut})
			isPaused = true
    } else if (n === 2){
      lamp.src = "images/bulb-off.jpg"
    } else if (n === 3) {
      lamp.src = 'images/bulb-broken.jpg'
      isPaused = true
    }
  }
}