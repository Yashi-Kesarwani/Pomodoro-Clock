var timerMinutes = 0;
var timerSeconds = 60;
var m,s;
$('#Start-timer').click(function() {
  timerMinutes = document.getElementById('minutes-input').value;
$('#minutes').html(timerMinutes-1);
  $('#seconds').html(timerSeconds);
  startTimer(timerMinutes-1,timerSeconds);
});
$('#Stop').click(function() {
  clearInterval(m);
  clearInterval(s);
});
function startTimer(timerMinutes,timerSeconds) {
  minutesCountDown(timerMinutes);
  secondsCountDown(timerSeconds);
}
function minutesCountDown(timerMinutes) {
  m = setInterval(function() {
  if(timerMinutes !== 0) {
    timerMinutes = timerMinutes - 1;
    $('#minutes').html(timerMinutes);
  }
  }, 1000*60);
}
function secondsCountDown(timerSeconds) {
  s = setInterval(function() {
  if(timerSeconds !== 0) {
    timerSeconds = timerSeconds - 1;
    $('#seconds').html(timerSeconds);
  }
  }, 1000);
}
$('#reset').click(function() {
   $('#minutes').html('00');
   $('#seconds').html('00');
  clearInterval(m);
  clearInterval(s);
})
  
