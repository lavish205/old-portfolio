$('#main').hide();
$('#loading').show();
$(window).load(function(){$('#loading').hide();	$('#main').show();});
$(document).ready(function(){
	$('.hov').hide();
	var wHeight = $(window).height();
	if(wHeight<800)
		wHeight=800;
	$('#main').height(wHeight);
	$('#Bio').height(wHeight);
	$('#Skills').height(wHeight);
	$('#Work').height(wHeight);
	$('#Contact').height(wHeight);

	var SkillsScroll = $('#Skills').offset().top;
	var WorkScroll = $('#Work').offset().top;
	var ContactScroll = $('#Contact').offset().top;
	// var backgroundPosition = $('#page').css("margin-top");
	// var marginValue = backgroundPosition.split('p')[0];

	// var lastScrollTop = 0,
	//         st,
	//         direction;

	//     function detectDirection() {

	//         st = window.pageYOffset;
	//         console.log(st);
	//         if (st > lastScrollTop) {
	//             direction = "down";
	//         } else {
	//             direction = "up";
	//         }

	//         lastScrollTop = st;
	//         if(st<250)
	//         	$('#page').css('margin-top',0);
	//         return  direction;
	        


	//     }

	//     $(window).bind('scroll', function() {

	//         var dir = detectDirection();
 //    	    if(dir == 'down')
 //    	    {
 //    	    	$('#page').css('margin-top',marginValue);
 //    	    	marginValue--;
 //    	    }
 //    	    else{
 //    	    	$('#page').css('margin-top',marginValue);
 //    	    	marginValue+=1;
 //    	    }
	//     });
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
		//$('#page').css("margin-top",marginValue);
	});
	$('header ul li').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
		var pos = '#'+$(this).data('title');
		$('html,body').animate({ scrollTop: $(pos).offset().top }, 'slow');
	});
	// Nav bar show hide
	$('span>img').click(function(){
		$('header ul li').toggle();
	}); 
});
