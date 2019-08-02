console.log("Hello World!");

var fan = document.querySelector(".vinyl");

TweenMax.to(fan, 2, {rotation:360, repeat:-1, ease:Linear.easeInOut})

// Código de descer
// TweenMax.to(".box", 1, {
//   y: function() {
//     return Math.random() * 300;
//   }
// });