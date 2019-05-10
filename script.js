$(document).ready(function(){
	 $('.organize, .members, .accommodation').mouseenter(function(){
		$(this).animate({
			height:'+=10px'
		});
	});
	$('.organize, .members, .accommodation').mouseleave(function(){
		$(this).animate({
			height:'-=10px'
		});
	});
});

	