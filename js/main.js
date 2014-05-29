$(document).ready(function(){
	var wHeight = $(window).height();
	
	$('#Bio').height(wHeight);
	$('#Skills').height(wHeight);
	$('#Work').height(wHeight);
	$('#Contact').height(wHeight);
	$('header ul li').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
		var pos = '#'+$(this).data('title');
		console.log(pos);
		$('html,body').animate({ scrollTop: $(pos).offset().top }, 'slow');
	});

});