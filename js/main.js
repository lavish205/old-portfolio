$('#main').hide();
$('#loading').show();
$(window).load(function(){$('#loading').hide();	$('#main').show();});
$(document).ready(function(){
	$('.hov').hide();
	var wHeight = $(window).height();
	$('#main').height(wHeight);
	$('#Bio').height(wHeight);
	$('#Skills').height(wHeight);
	$('#Work').height(wHeight);
	$('#Contact').height(wHeight);
	
	var SkillsScroll = $('#Skills').offset().top;
	var WorkScroll = $('#Work').offset().top;
	var ContactScroll = $('#Contact').offset().top;
	$(window).scroll(function(){
		var a = $(window).scrollTop();
		
		if(a>=0)
		{
			$('.active').removeClass('active');
			$("[data-title='Bio']").addClass('active');
		}
		if(a>=SkillsScroll)
		{
			$('.active').removeClass('active');
			$("[data-title='Skills']").addClass('active');
		}
		if(a>=WorkScroll){
			$('.active').removeClass('active');
			$("[data-title='Work']").addClass('active');
		}
		if(a>=ContactScroll){
			$('.active').removeClass('active');
			$("[data-title='Contact']").addClass('active');
		}
	});
	$('header ul li').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
		var pos = '#'+$(this).data('title');
		$('html,body').animate({ scrollTop: $(pos).offset().top }, 'slow');
	});

	$('.Skillsimg').hover(function(){
		$('span',this).hide();
		$('.hov',this).show();
	},function(){
		$('span',this).show();
		$('.hov',this).hide();
	});
	// Nav bar show hide
	$('span>img').click(function(){
		$('header ul li').toggle();
	}); 
});
