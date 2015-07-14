$(document).ready(function(){
	$.stellar();

	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 100,
		mobile: true,
		live: true
	});
	wow.init();

	// For nav bar: 
	$(window).bind('scroll',function(){
		var navHeight = $('.nav').height();
		($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');
	});

	var winHeight = $(window).height();
	var sticky = winHeight - $('nav').outerHeight(true);

	$(window).scroll(function(){
		var scrollVal = $(this).scrollTop();
		if(scrollVal > sticky){
			$('nav').slideDown();
		}else {
			$('nav').slideUp();
		}
	});

	$('#toTop').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1500);
	        return false;
	      }
	    }
	  });

	$('#quote-carousel').carousel({
		pause: false,
		interval: 15000
	});

	var userFeed = new Instafeed({
		get: 'user',
		userId: 1765479990,
		accessToken: '1765479990.467ede5.5373d2910670417394cfeabb0a03fdcf',
		links: true,
		sortBy: 'random',
		resolution: 'standard_resolution',
		after: function(){
			var images = $('#instafeed').find('img');
			$(images.slice(4, images.length)).remove();
			$.each(images, function(index, image){
				var delay = (index * 75) + 'ms';
				$(image).css('-webkit-animation-delay', delay);
				$(image).css('-moz-animation-delay', delay);
				$(image).css('-ms-animation-delay', delay);
				$(image).css('-o-animation-delay', delay);
				$(image).css('animation-delay', delay);
				$(image).addClass('wow fadeInRight');
			});
		},
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
	});
	userFeed.run();
});