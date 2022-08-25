// JavaScript Document


var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");
var vid4 = document.getElementById("vid4");
var vid5 = document.getElementById("vid5");

var alto = $("#nom-rdd").height();

$(".nom_sec").height(alto);

$(document).ready(function () {	
	
	
	
 

TweenMax.from($("#poli,#upic"), 1, {opacity:0}); 
TweenMax.to($("#quetza"), 1, {opacity:1, x:70, ease:Power0.easeNone});	
TweenMax.to($("#quetza"), 1.5, {x:550, delay:0.5});

TweenMax.to($("#quetza_ch"), 1, {opacity:1, x:100, ease:Power0.easeNone});
TweenMax.to($("#quetza_ch"), 1.5, {x:311, delay:0.5});
	
TweenMax.to($("#siglas"), 1, {css:{width:400},delay:0.9});
TweenMax.to($("#siglas_ch"), 1, {css:{width:190},delay:0.8});		

TweenMax.to($(".tx_logoo"), 1, {opacity:1, y:-60, delay:1.5});	

	

TweenMax.to($("#info,#ligo,#instruc"), 1, {y:100, opacity:1, delay:2});
	
TweenMax.fromTo($(".sec"), 1, { scale:0.5, opacity:0},{ scale:0.9, opacity:1, delay:2,  ease:Back.easeOut});
TweenMax.fromTo($("#conecta, #extras"), 1, {y:100, opacity:0},{ y:0, opacity:1, delay:2,  ease:Back.easeOut});


	
 $( ".sec" ).mouseover(function() {
TweenMax.to($(this), 1, { scale:1,ease:Back.easeOut});
});

$( ".sec" ).mouseout(function() {
	
TweenMax.to($(this), 1, { scale:0.9,ease:Back.easeOut});
});		



// $('#banner').click(function(){
//   window.open("piensa/index.html", '_blank');
// });	
// $('.capacitacion').click(function(){
//   window.open("https://www.ipn.mx/capacitacion365/", '_blank');
// });	
$('#sec1').click(function(){
  window.open("#", '_blank');
});	
$('#sec2').click(function(){
  window.open("#", '_blank');
});	
$('#sec3').click(function(){
  window.open("#", '_blank');
});	
$('#sec4').click(function(){
  window.open("#", '_blank');
});		
$('#sec5').click(function(){
  window.open("#", '_blank');
});	
$('#sec6').click(function(){
  window.open("#", '_blank');
});		
$('#sec7').click(function(){
  window.open("#", '_blank');
});		
$('#sec8').click(function(){
  window.open("#", '_blank');
});		
$('#sec9').click(function(){
  window.open("#", '_blank');
});		
$('#sec10').click(function(){
  window.open("#", '_blank');
});		

	
	
/*------------------------------*/	
	
	
	
$('#b_stickers').click(function(){
  window.open("imas/stickers.zip");
});	
	

$("#myModal").on('shown.bs.modal', function () {
    vid1.play();
  });	
$("#myModal").on('hide.bs.modal', function () {
    vid1.pause();
  });

$("#myModal2").on('shown.bs.modal', function () {
    vid2.play();
  });	
$("#myModal2").on('hide.bs.modal', function () {
    vid2.pause();
  });
	
$("#myModal3").on('shown.bs.modal', function () {
    vid3.play();
  });	
$("#myModal3").on('hide.bs.modal', function () {
    vid3.pause();
  });
	
$("#myModal4").on('shown.bs.modal', function () {
    vid4.play();
  });
$("#myModal4").on('hide.bs.modal', function () {
    vid4.pause();
  });
	
$("#myModal5").on('shown.bs.modal', function () {
    vid5.play();
  });	
$("#myModal5").on('hide.bs.modal', function () {
    vid5.pause();
  });	


	
/* --------------------------------------*/ 
	
$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});
  
	
		
		

 
});
 
 
