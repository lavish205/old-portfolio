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
	$(window).scroll(function(){
		var a = $(window).scrollTop();
		if(a>=0)
		{
			$('.active').removeClass('active');
			$("[data-title='Bio']").addClass('active');
		}
		if(a>=500)
		{
			$('.active').removeClass('active');
			$("[data-title='Skills']").addClass('active');
		}
		if(a>=1200){
			$('.active').removeClass('active');
			$("[data-title='Work']").addClass('active');
		}
		if(a>=1820){
			$('.active').removeClass('active');
			$("[data-title='Contact']").addClass('active');
		}
		
	});
	

});