var secondHand = document.getElementById("second-hand");
var minuteHand = document.getElementById("minute-hand");
var hourHand = document.getElementById("hour-hand");



function moveHands(){
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hour = d.getHours()%12;

  var secondHandAngle = (sec*360)/60;

  secondHand.style.transform = `rotate(${secondHandAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandAngle}deg)`;
  hourHand.style.transform = `rotate(${hourHandAngle}deg)`;
}


setInterval(function(){moveHands();}, 1000);

