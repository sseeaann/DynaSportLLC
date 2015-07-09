$(document).ready(function(){
	$.stellar();

	$('#quote-carousel').carousel({
		pause: false,
		interval: 15000
	});

	// For nav bar: 
	$(window).bind('scroll',function(){
		var navHeight = 700;
		($(window).scrollTop() > navHeight) ? $('.nav').addClass('goToTop') : $('.nav').removeClass('goToTop');
	});

	$(window).scroll(function(){
		// console.log(scrollY);
		var x = $(this).scrollTop();
		if (x > 300) {
			$('#twoContent').show();
		}
		if (x > 700) {
			$('.nav').slideDown('slow');
		} else {
			$('.nav').slideUp('slow');
		}
		if (x > 900) {
			$('#quotesContent').slideDown('slow');
		}
		if (x > 1200) {
			$('#instafeed').show();
		}
		if (x > 1600) {
			$('#linksContent').fadeIn('slow');
		}
		if (x > 2000) {
			$('#contactContent').slideDown(500);
		}
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
				$(image).addClass('animated fadeInUp');
			});
		},
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
	});
	userFeed.run();
});