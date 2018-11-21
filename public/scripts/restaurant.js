
$(document).ready(function(){
	$('.scrollTo').on("click", function(){
		let content = $(this).text().toLowerCase();

		$('html, body').animate({
			scrollTop:$('#'+content).offset().top-80
		}, 800);
		let mode = $('.navbar-toggler');
		
		mode.click();
	});
	
	$('.scrollStart').on("click", function(){
		$('html, body').animate({
			scrollTop:0
		},800);
	});
	
	$(".js-rotating").Morphext({
	    animation: "bounceIn",
	    separator: ",",
	    speed: 3000
	});
});