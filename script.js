var secondHand = document.getElementById("second-hand");
var minuteHand = document.getElementById("minute-hand");
var hourHand = document.getElementById("hour-hand");

function moveHands(){
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hour = d.getHours()%12; // % needed because there is only 12 hours on analog watch

  var secondHandAngle = (sec*360)/60-90; //-90 because CSS set hands horizontaly when angle is 0deg
  var minuteHandAngle = (min*360)/60-90;
  var hourHandAngle = (hour*360)/12+(min*30)/60-90; //(min*30)/60 added simulate real analog watch

  secondHand.style.transform = `rotate(${secondHandAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandAngle}deg)`;
  hourHand.style.transform = `rotate(${hourHandAngle}deg)`;
}

setInterval(function(){moveHands();}, 1000);

