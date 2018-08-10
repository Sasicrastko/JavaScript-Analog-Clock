var secondHand = document.getElementById("second-hand");
var minuteHand = document.getElementById("minute-hand");
var hourHand = document.getElementById("hour-hand");

var a = 0;

function moveHands(){
  a++;
  b++;
  c++;
  secondHand.style.transform = `rotate(${a}deg)`;
}


setInterval(function(){ moveHands(); }, 1000);

