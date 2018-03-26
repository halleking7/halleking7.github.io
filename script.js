$(document).ready(function() {

   // work through together in class
  
  setTimeout(function(){
  	$(".snooze").addClass("alarming");
  	$("body").addClass("alarming");
  }, 5000);

  $(".snooze").click(function(){
  	$(".snooze").removeClass("alarming");
  	$("body").removeClass("alarming");
  });
});