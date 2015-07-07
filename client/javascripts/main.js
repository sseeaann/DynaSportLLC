$(document).ready(function(){

	$('#quote-carousel').carousel({
		pauseOnHover: true,
		interval: 6000
	});

	$(window).bind('scroll',function(){
		var navHeight = 700;
		($(window).scrollTop() > navHeight) ? $('.nav').addClass('goToTop') : $('.nav').removeClass('goToTop');
	});

	var userFeed = new Instafeed({
		get: 'user',
		userId: 1765479990,
		accessToken: '1765479990.467ede5.5373d2910670417394cfeabb0a03fdcf',
		links: true,
		sortBy: 'random',
		limit: 4,
		resolution: 'standard_resolution',
		after: function(){
			var images = $('#instafeed').find('img');
			$.each(images, function(index, image){
				var delay = (index * 75) + 'ms';
				$(image).css('-webkit-animation-delay', delay);
				$(image).css('-moz-animation-delay', delay);
				$(image).css('-ms-animation-delay', delay);
				$(image).css('-o-animation-delay', delay);
				$(image).css('animation-delay', delay);
				$(image).addClass('animated bounceInRight');
			});
		},
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
	});
	userFeed.run();
});